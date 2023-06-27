import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { logger } from './logger';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as admin from 'firebase-admin';

async function bootstrap() {
  // Initialize Firebase Admin SDK
  const serviceAccount = require('../../firebase/profile-preferences-api-firebase-adminsdk-j2irz-5f17f05444.json');
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  const app = await NestFactory.create(AppModule);

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // Swagger API documentation
  const options = new DocumentBuilder()
    .setTitle('User Preferences API')
    .setDescription('API for managing user preferences')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000, () => {
    logger.log('Application is running on: http://localhost:3000');
  });
}

bootstrap();

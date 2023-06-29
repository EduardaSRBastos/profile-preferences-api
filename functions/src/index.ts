import * as functions from 'firebase-functions';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../src/app.module';

const runtimeOpts = {
  timeoutSeconds: 60,
};

const server = async () => {
  const app = await NestFactory.create(AppModule);
  await app.init();

  // Export the Nest.js app as a Cloud Function
  return functions.region('europe-west2').runWith(runtimeOpts).https.onRequest(app.getHttpAdapter().getInstance());
};

export const ProfilePreferencesFunction = server();

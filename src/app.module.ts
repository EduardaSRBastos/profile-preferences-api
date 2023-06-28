import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserPreferencesController } from './user/user-preferences.controller';
import { LoggerService } from './logger.service';

/* The AppModule class is responsible for importing modules, defining controllers, and providing
services for the application. */
@Module({
  imports: [],
  controllers: [AppController, UserPreferencesController],
  providers: [AppService, LoggerService],
})
export class AppModule {}

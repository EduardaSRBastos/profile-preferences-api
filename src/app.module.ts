import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserPreferencesController } from './user/user-preferences.controller';

/* The AppModule class is responsible for importing modules, defining controllers, and providing
services for the application. */
@Module({
  imports: [],
  controllers: [AppController, UserPreferencesController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserPreferencesController } from './user/user-preferences.controller';

@Module({
  imports: [],
  controllers: [AppController, UserPreferencesController],
  providers: [AppService],
})
export class AppModule {}

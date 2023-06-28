import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { logger } from './logger';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getTitle(): string {
    logger.log('Getting title...');
    const title = this.appService.getTitle();
    logger.log(`Title: ${title}`);
    return title;
  }
}

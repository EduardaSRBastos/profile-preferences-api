import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTitle(): string {
    return 'Profile Preferences API';
  }
}

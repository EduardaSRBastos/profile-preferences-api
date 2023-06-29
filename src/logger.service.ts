import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggerService extends Logger {
  constructor(context?: string) {
    super(context || '');
  }
  
  log(message: string) {
    console.log(`[INFO] ${message}`);
    super.log(message);
  }
  
  error(message: string, trace?: string) {
    console.error(`[ERROR] ${message}`);
    if (trace) {
      console.error(trace);
    }
    super.error(message, trace);
  }
  
  warn(message: string) {
    console.warn(`[WARNING] ${message}`);
    super.warn(message);
  }
  
  debug(message: string) {
    console.debug(`[DEBUG] ${message}`);
    super.debug(message);
  }
  
  verbose(message: string) {
    console.log(`[VERBOSE] ${message}`);
    super.verbose(message);
  }
}

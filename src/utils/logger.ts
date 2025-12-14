import { Logger, LogLevel } from '../types';

/**
 * Simple console logger implementation
 */
class ConsoleLogger implements Logger {
  private formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  }

  debug(message: string, ...args: unknown[]): void {
    console.debug(this.formatMessage(LogLevel.DEBUG, message), ...args);
  }

  info(message: string, ...args: unknown[]): void {
    console.info(this.formatMessage(LogLevel.INFO, message), ...args);
  }

  warn(message: string, ...args: unknown[]): void {
    console.warn(this.formatMessage(LogLevel.WARN, message), ...args);
  }

  error(message: string, ...args: unknown[]): void {
    console.error(this.formatMessage(LogLevel.ERROR, message), ...args);
  }
}

export const logger = new ConsoleLogger();
export default logger;
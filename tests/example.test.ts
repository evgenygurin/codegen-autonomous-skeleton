import { logger } from '../src/utils/logger';
import { LogLevel } from '../src/types';

describe('Logger', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should log info messages', () => {
    const consoleSpy = jest.spyOn(console, 'info');
    logger.info('Test message');
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log error messages', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    logger.error('Error message');
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log debug messages', () => {
    const consoleSpy = jest.spyOn(console, 'debug');
    logger.debug('Debug message');
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log warn messages', () => {
    const consoleSpy = jest.spyOn(console, 'warn');
    logger.warn('Warning message');
    expect(consoleSpy).toHaveBeenCalled();
  });
});

describe('LogLevel', () => {
  it('should have correct log levels defined', () => {
    expect(LogLevel.DEBUG).toBe('debug');
    expect(LogLevel.INFO).toBe('info');
    expect(LogLevel.WARN).toBe('warn');
    expect(LogLevel.ERROR).toBe('error');
  });
});
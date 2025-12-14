/**
 * Common type definitions for the application
 */

/**
 * Log levels
 */
export enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

/**
 * Logger interface
 */
export interface Logger {
  debug(message: string, ...args: unknown[]): void;
  info(message: string, ...args: unknown[]): void;
  warn(message: string, ...args: unknown[]): void;
  error(message: string, ...args: unknown[]): void;
}

/**
 * Configuration interface
 */
export interface Config {
  nodeEnv: string;
  port: number;
  codegenApiKey?: string;
  codegenOrgId?: string;
  linearApiKey?: string;
  linearProjectId?: string;
}
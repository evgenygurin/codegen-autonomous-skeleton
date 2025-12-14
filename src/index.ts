import dotenv from 'dotenv';
import { logger } from './utils/logger';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

/**
 * Main application entry point
 */
function main(): void {
  logger.info('Starting Codegen Autonomous Skeleton...');
  logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
  logger.info(`Port: ${PORT}`);
  
  // Your application logic here
  logger.info('Application initialized successfully!');
}

// Run the application
main();

export default main;
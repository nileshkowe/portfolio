/**
 * @file Logger utility for the portfolio website.
 * Provides timestamped logging to console.
 */



/**
 * Logger module with different logging levels.
 */
export const logger = {
  /**
   * Logs a trace message.
   * Used for highly detailed, step-by-step information.
   * @param {string} message - The message to log.
   */
  trace: (message: string): void => {
    console.debug(`[TRACE] ${message}`);
  },
  /**
   * Logs a debug message.
   * Used for function entry/exit, key variable states.
   * @param {string} message - The message to log.
   */
  debug: (message: string): void => {
    console.debug(`[DEBUG] ${message}`);
  },
  /**
   * Logs an info message.
   * Used for high-level milestones (e.g., server start, DB connected).
   * @param {string} message - The message to log.
   */
  info: (message: string): void => {
    console.log(`[INFO ] ${message}`);
  },
  /**
   * Logs a warning message.
   * Used for recoverable issues or potential problems.
   * @param {string} message - The message to log.
   */
  warn: (message: string): void => {
    console.warn(`[WARN ] ${message}`);
  },
  /**
   * Logs an error message.
   * Used for uncaught exceptions, failures, or critical errors.
   * @param {string} message - The message to log.
   * @param {any} [errorObject] - Optional error object to log.
   */
  error: (message: string, errorObject?: unknown): void => {
    console.error(`[ERROR] ${message}`, errorObject || '');
  },
};

// Export individual functions for easier import if preferred
export const { trace, debug, info, warn, error } = logger; 
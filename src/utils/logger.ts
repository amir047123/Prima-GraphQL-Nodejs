import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, colorize, errors } = format;

const myFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    colorize(),
    timestamp(),
    errors({ stack: true }), // <-- use errors format
    myFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ],
});

// For development, log to the console with colorized output
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: combine(
      colorize(),
      myFormat
    )
  }));
}

export default logger;

//  importing the winston logging library
const winston = require('winston');

// using timestamp
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}:${message}`;
});

const logger = createLogger({
    format: combine(
        label({ label: 'right meow!' }),
        timestamp(),
        myFormat
    ),
    // transports: [new transports.Console()]
    transports: [
        new winston.transports.Console(), // console output
        new winston.transports.File({ filename: 'log.log', level: 'error' }),  //error or error.log
        new winston.transports.File({ filename: 'combined.log' }) // info or combined.log
    ]
});


// Log an info message
logger.info('Hello, Winston our');

// log an error message with additional metadata
logger.error('Something went wrong me', { error: new Error('Somthing went wrong this Avi') });
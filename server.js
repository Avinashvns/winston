//  importing the winston logging library
const winston = require('winston');


// Create a logger object with the desired settings
const logger=winston.createLogger({
    level: 'info', // logging level
    format: winston.format.json(), //log format
    transports:[
        // new winston.transports.Console(), // console output
        new winston.transports.File({filename: 'log.log',level:'error'}),  //error or error.log
        new winston.transports.File({filename:'combined.log'}) // info or combined.log
    ]
});

// Log an info message
logger.info('Hello, Winston Anurag singh');

// log an error message with additional metadata
logger.error('Something went wrong here note', { error: new Error('Somthing went wrong this Avi') });

// if (process.env.NODE_ENV !== 'production') {
//     logger.add(new winston.transports.Console({
//       format: winston.format.simple(),
//     }));
// }
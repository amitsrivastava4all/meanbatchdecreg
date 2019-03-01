const log4js = require('log4js');
log4js.configure({
  appenders: { mylogs: { type: 'file', filename: 'app.log', maxLogSize:2048,backups:10,layout: { type: 'coloured' } } },
  categories: { default: { appenders: ['mylogs'], level: 'error' } }
});
const logger = log4js.getLogger('mylogs');
module.exports = logger;

// const winston = require("winston");
// 	const logger = winston.createLogger({


// 	  format: winston.format.combine(
// 	    winston.format.timestamp(),
// 	    winston.format.json()
// 	),
// 	  //format: winston.format.json(),
// 	  transports: [


// 	    new winston.transports.File({ filename: 'app.log' ,level: 'debug'})
// 	  ]
// 	});
// 	module.exports = logger;

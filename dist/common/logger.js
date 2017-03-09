'use strict';

const winston = require('winston');
const path = require('path');
const fs = require('fs');
const moment = require('moment');

const logPath = path.join(__dirname, '../../log');
if (!fs.existsSync(logPath)) {
  fs.mkdirSync(logPath);
}
module.exports = fileName => {
  const logger = new winston.Logger({
    transports: [new winston.transports.Console({
      level: 'debug',
      colorize: false,
      json: false,
      prettyPrint: true,
      filename: `${logPath}${fileName}.log`,
      timestamp: () => moment().format('YYYY-MM-DD HH:mm:ss')
    })]
  });
  return logger;
};
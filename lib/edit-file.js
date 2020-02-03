'use strict';

const fs = require('fs');
const validator = require('./validator.js');

/**
 * Read file function
 * @param  {} file
 * @param  {} callback
 */
const read = (file, callback) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(undefined, JSON.parse(data.toString()));
    }
  });
};
/**
 * file save function
 * @param  {} data
 * @param  {} fileName
 * @param  {} rules
 * @param  {} callback
 */

const save = (data, fileName, rules, callback) => {
  if(validator.isValid(rules, data)){
    const buffer = Buffer.from(JSON.stringify(data));

    fs.writeFile(fileName, buffer, err => {
      if (err) {
        callback(err);
      } else {
        callback(undefined);
      }
    });
  } else { console.log('Is invalid'); }
};



module.exports = {read, save};
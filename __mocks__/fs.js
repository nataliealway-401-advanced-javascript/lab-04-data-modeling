'use strict';

module.exports = exports = {};

var fileContents = 'Hello';
/**
 * readFile
 * @param  {} file
 * @param  {} cb
 */
exports.readFile = (file, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  }
  else {
    cb(undefined, Buffer.from(fileContents));
  }
};
/**
 * writeFile
 * @param  {} file
 * @param  {} buffer
 * @param  {} cb
 */
exports.writeFile = (file, buffer, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  }
  else {
    fileContents = buffer;
    cb(undefined, true);
  }
};
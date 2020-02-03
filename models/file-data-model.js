'use strict';
const uuid = require('uuid/v4');
const validator = require('../lib/validator.js');
const editFile = require('../lib/edit-file.js');
const utils = require('util');

const readFile = utils.promisify(editFile.read);
// const writeFile = utils.promisify(editFile.save);



//file model class

class FileModel {
  constructor (schema, path) {
    this.schema = schema;
    this.path = path;
  }
  //get record from the file
  get(id) {
    return readFile(this.path)
      .then(result => {
        const response = result[id]? {id: result[id]} : 'No entry found';
        return Promise.resolve(response);
      });
  }

  create(record) {
    record.id = uuid();
    if(validator.isValid(this.schema, record)) {
      return readFile(this.path)
        .then(data => {
          const response = data[record.id] = record;
          return Promise.resolve(response);
        });
    }
    return Promise.reject('Failed validation');
  }

  update(id, record) {
    if(validator.isValid(this.schema, record)) {
      return readFile(this.path)
        .then(data => {
          return Promise.resolve(record);
        });
    }
  }

  delete(id) {
    this.database = this.database.filter((record) => record.id !== id);
    return Promise.resolve();
  }

}

module.exports = FileModel;
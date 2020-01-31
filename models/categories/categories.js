'use strict';

const DataModel = require('../models/memory-data-model.js/index.js');

class Categories extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { required: true },
      name: { required: true },
    };
  }
}

module.exports = Categories;
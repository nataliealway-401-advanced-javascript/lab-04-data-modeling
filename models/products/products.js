'use strict';

const dataModel = require('../file-data-model.js');


class Product extends dataModel {
  constructor(path){
  
    const schema = {
      category_id: {
        type: 'string',
        required: true,
      },
      price: {
        type: 'number',
        require: true,
      },
      weight: {
        type: 'number',
      },
      quantity_in_stock: {
        type: 'number',
        required: true,
      },
    };
    super(schema, path);
  }
}
  
module.exports = Product;
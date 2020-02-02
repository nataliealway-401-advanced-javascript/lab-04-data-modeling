const Products = require('../models/products/products.js');

describe('Products Model', () => {

  let products;

  beforeEach(() => {
    products = new Products();
  });

  it('can post() a new category', () => {
    let obj = { name: 'Test Product' };
    return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });
});
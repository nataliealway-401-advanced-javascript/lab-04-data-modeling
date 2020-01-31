const Categories = require('../models/categories/categories.js');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });

  //POST
  it('can post() a new category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  //GET 
  it('can get() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  //UPDATE
  it('can update() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.update(record.id, {name: 'test'})
          .then(category => {
            Object.keys(obj).forEach(key =>{
              expect(category[key]).not.toEqual(obj[key]);
            });
          });
      });
  });
  //DELETE
  it('can delete() a category', () => {
    let obj = {name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then( category => {
            return categories.delete(category[0].id)
              .then( data => {
                expect(data).toBeUndefined();
              });
          });
      });
  });
});
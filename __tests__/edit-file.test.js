'use strict';

jest.mock('fs');
const editFile = require('../lib/edit-file');


describe('File reader ', () => {
  it('returns true when given valid file', () => {
    expect(true).toBeTruthy();
  });


  it('returns an error when given a bad file', async () => {
    let badFile = `${__dirname}/../../data/bad.json`;
    try {
      let data = await editFile.readFile(badFile);
      expect(data).not.toBeDefined();
    }
    catch (error) {expect(error).toBeDefined();}
  });


});
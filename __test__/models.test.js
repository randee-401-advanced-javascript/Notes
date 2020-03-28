'use strict';

const supergoose = require('@code-fellows/supergoose');
const NotesModel = require('../models/notesModel.js');

beforeAll(async () => {
  await NotesModel.create({
    note: 'testing. testing. 1 2 3.',
  });

  await NotesModel.create({
    note: 'I hear hummingbirds.',
    category: 'morning'
  });
});

describe('Database can create a note', () => {
  it('all the things', async () => {
    let response = await NotesModel.create({
      note: 'The dog is snoring.',
      category: 'morning'
    });
    
    console.log(response);

    expect(response).toBeTruthy();
    expect(response.note).toBe('The dog is snoring.');
  });

  it('no note to pass through', async () => {
    let response = await FoodModel.create({
      category: 'morning',
    });

    expect(response).toBeFalsy();
  });

  it('note not a string', async () => {
    let response = await FoodModel.create({
      note: NaN,
      category: 'morning',
    });

    expect(response).toBeFalsy();
  });

})

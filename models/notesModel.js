'use strict';

const mongoose = require('mongoose');
const notesMongooseModel = require('./notes-schema.js');

class Model {
  constructor(mongooseModel) {
    this.model = mongooseModel;
  }

  async create(noteText, category) {
    try{
      let newNote = new NotesModel ({
        note: noteText,
        category: category ? category : '',
      })
      await newNote.save();
    } catch (e) {
      console.error(e, 'Could not add a note. You should do something about this.', e);
    }
  }

  async read(category) {
    let allNotes = []; 
    try {
      allNotes = await NotesModel.find();
    } catch (e) {
      console.error('Could not find notes to read. Look harder', e);
    } 
    if(category){
      allNotes = allNotes.filter(note => {
        return note.category.includes(category);
      }) 
    }
    allNotes.forEach(note => {
      console.log(note.note, note._id);
    })
  }

  async delete(noteId) {
    try {
      await NotesModel.deleteOne({ _id : noteId })
    } catch (e) {
      console.error('Could not find note to delete. Look harder.', e)
    } 
  }
}


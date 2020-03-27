'use strict';

let mongoose = require('mongoose');
let NotesModel = require('../models/notesModel.js')
// let NotesModel = require('../models/notes-schema.js');

/**
 * Notes
 * @module notes
 */

 /**
  * Note - constructor function
  * @function Note
  */




class Notes {
  constructor(command){
    if (command && command.action) this.execute(command);    else console.error('ERROR! Invalid arguments sent to app. Please work harder to not be an invalid.', e);
  }

  execute(command){
    switch(command.action) {
      case 'add':
        if (!command.payload) {
          console.error('Missing payload. Do something about this, would you?', e);
          return;
        }
        this.create(command.payload, command.category);
        break;
      case 'list':
        this.read(command.payload);
        break;
      case 'delete':
        if(!command.payload){
          console.error('Missing payload. Do something about this, would you?', e);
          return;
        }
        this.delete(command.payload);
        break;
      default: break;
    }
  }

  async add(noteText, category) {
    try {
      await NotesModel.create(noteText, category);
    } catch (e) {
      console.error('Things went wrong in notes.js', e)
    }
    mongoose.disconnect
  }

  async list(category) {
    try {
      await NotesModel.create( category);
    } catch (e) {
      console.error('Things went wrong in notes.js', e)
    }
    mongoose.disconnect
  }

  async delete(id) {
    try {
      await NotesModel.delete(id);
    } catch (e) {
      console.error('Things went wrong in notes.js', e)
    }
    mongoose.disconnect
  }
  
}



module.exports = Notes;



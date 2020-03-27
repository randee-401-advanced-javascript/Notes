'use strict';

const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  note: { type: String, required: true },
  category: { type: Array },
});

notesSchema.pre('save', function() {
  console.log('Hoping to save your new note! Text below.');
  console.log(this.note);
  console.log('-----------------')
})

notesSchema.post('save', function() {
  console.log('Sure did save that note. Boom.')
  console.log('End scene.')
})

notesSchema.pre('find', function() {
  console.log('Hoping to list out all notes. Should be below');
  console.log('-----------------')
})

notesSchema.post('find', function() {
  console.log('Sure did find those notes. Boom.')
  console.log('End scene.')
})


notesSchema.pre('deleteOne', function() {
  console.log('Hoping to delete your crummy note. Text below.');
  console.log(this.note);
  console.log('-----------------')
})

notesSchema.post('deleteOne', function() {
  console.log('That note is gone forever.')
  console.log('End scene. Forever and ever.')
})


const notesModel = mongoose.model('notes', notesSchema);


module.exports = notesModel;

#!/usr/bin/env node
'use strict';

/**
 * / Request Handler (All Routes)
 * @param req
 * @param res
 */


const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/newNotes';
const Notes = require('./lib/notes');
const Input = require('./lib/input')


 mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true});



let args = process.argv.slice(2);

let myInput = new Input(args);
let myHandler = new Notes(myInput.command);






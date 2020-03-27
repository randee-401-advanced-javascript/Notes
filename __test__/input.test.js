'use strict';

const Input = require('../lib/input.js');

const badInputA = [];
const badInputB = ['WRONG'];
const badInputC = ['-b', 'WRONG'];
const badInputD = ['-a'];

const goodInput = ['-a', 'Notes here.'];

describe('Handles bad input with grace and generosity. Nothing is fatal.', () => {
  it ('handles empty input', () => {
    let result = new Input(badInputA);
    expect(result.command.action).toBeFalsy();
  });
  it ('handles wrong input', () => {
    let result = new Input(badInputB);
    expect(result.command.action).toBeFalsy();
  });
  it ('handles wrong flag', () => {
    let result = new Input(badInputC);
    expect(result.command.action).toBeFalsy();
  });
  it ('handles wrong data type', () => {
    let result = new Input(badInputD);
    expect(result.command.payload).toBeTruthy();
  });
})

describe('the module handles good input with grace and beauty and without gloating', () => {
  it ('handles good input for -a flag', () => {
    let result = new Input(goodInput);
    expect(result.command).toBeTruthy();
  });
})

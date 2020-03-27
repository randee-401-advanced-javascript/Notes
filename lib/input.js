'use strict';

/**
 * Input
 * @module input
 */

/**
 * Input - constructor function
 * @function Input
 */





const minimist = require('minimist');
// This job is to say I have this information and what do we do with it
class Input {

  constructor(args) {
    let formatted = minimist(args);
    this.command = {};
    let objectKeyArray = Object.keys(formatted);

    objectKeyArray.forEach(key => {
      formatted[key];
  
      switch (key) {
        case 'a':
        case 'add':
              this.command = { action: 'add', payload: formatted[key], 
              category: false,
            };
              break;
        case 'c':
        case 'category':
              this.command.category = 
                typeof formatted[key] === 'string' ? formatted[key]: false;
              break;
        case 'l':
        case 'list':
              this.command = { action: 'list', 
              payload: 
                typeof formatted[key] === 'string' 
                  ? formatted[key]
                  : false
              };
              break;
        case 'd':
        case 'delete':
            this.command = { action: 'delete', 
            payload: typeof formatted[key] === 'string' ? formatted[key] : false, 
          };
          break;
        default: 
          break;
      }
    });
  }  

}




module.exports = Input;




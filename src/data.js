
var fs = require('fs');
var data = require('../package.json');

data.banks = [
  {
    name: 'Init',
    tracks: [
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
    ]
  },
  {
    name: 'House',
    tracks: [
      { pattern: [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, ] },
      { pattern: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0, ] },
      { pattern: [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0, ] },
    ]
  },
  {
    name: 'Dusty Closet 1',
    tempo: 96,
    tracks: [
      { pattern: [1,0,0,0, 0,0,0,1, 0,0,1,0, 0,1,0,0, ] },
      { pattern: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, ] },
      { pattern: [1,0,0,0, 1,0,0,0, 1,0,0,0, 0,0,0,0, ] },
      { pattern: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, ] },
      { pattern: [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,1, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, ] },
    ]
  },
  {
    name: 'Dusty Closet 2',
    tempo: 96,
    tracks: [
      { pattern: [1,0,1,0, 0,0,0,0, 0,0,0,0, 0,0,1,0, ] },
      { pattern: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, ] },
      { pattern: [1,0,1,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [1,0,0,0, 0,0,1,0, 0,0,0,1, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,1,0,0, 1,0,0,1, 0,0,1,1, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, ] },
    ]
  },
  {
    name: 'Let Go',
    tempo: 96,
    tracks: [
      { pattern: [1,0,0,0, 0,0,1,1, 0,0,1,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, ] },
      { pattern: [1,0,0,1, 0,0,1,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, ] },
    ]
  },

  /*
  {
    name: 'Let Go 1',
    tempo: 96,
    tracks: [
      { pattern: [1,0,0,0, 0,0,0,1, 0,0,1,0, 0,1,0,0, ] },
      { pattern: [0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,0,0, ] },
      { pattern: [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, ] },
      { pattern: [0,0,0,1, 0,0,1,0, 0,1,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
    ]
  },
  {
    name: 'Let Go 2',
    tempo: 96,
    tracks: [
      { pattern: [1,0,0,0, 0,0,0,0, 1,0,1,1, 0,0,0,1, ] },
      { pattern: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, ] },
      { pattern: [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, ] },
      { pattern: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, ] },
    ]
  },
  */
];

module.exports = data;


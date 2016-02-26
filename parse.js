'use strict';

const doctrine = require('doctrine');
const fs = require('fs');


const input = fs.readFileSync('tests/bio/_bio.html', 'utf-8');
const re = /\/\*{2}([\s\S]+?)\*\//g;
const matches = input.match(re);

const output = doctrine.parse(matches[0], { unwrap: true });

console.log(output);

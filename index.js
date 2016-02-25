'use strict';

const nunjucks = require('nunjucks');


const res = nunjucks.render('tests/bio/_bio.html');
console.log(res);

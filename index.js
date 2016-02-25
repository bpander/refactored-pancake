'use strict';

const nunjucks = require('nunjucks');
const fs = require('fs');


const res = nunjucks.render('tests/bio/_bio.html', {
    partial: function (path, model) {
        return new nunjucks.runtime.SafeString(nunjucks.render(path, { model: model }));
    },
    json: function (path) {
        return JSON.parse(fs.readFileSync(path, { encoding: 'utf-8' }));
    }
});
console.log(res);

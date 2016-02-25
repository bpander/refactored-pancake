'use strict';

const nunjucks = require('nunjucks');


const loader = new nunjucks.FileSystemLoader('tests');
const env = new nunjucks.Environment(loader);
const res = env.render('./bio/_bio.html', {
    partial: function (path, model) {
        const ctx = Object.assign({}, this.ctx, model);
        return new nunjucks.runtime.SafeString(env.render(path, ctx));
    },
    json: function (path) {
        const source = loader.getSource(path);
        return JSON.parse(source.src);
    }
});
console.log(res);

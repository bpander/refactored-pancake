'use strict';

const nunjucks = require('nunjucks');
const env = nunjucks.configure();

const res = nunjucks.render('tests/bio/_bio.html', {
    partial: function (path, model) {
        const ctx = Object.assign({}, this.ctx, model);
        return new nunjucks.runtime.SafeString(nunjucks.render(path, ctx));
    },
    json: function (path) {
        const loader = env.loaders[0];
        const source = loader.getSource(path);
        return JSON.parse(source.src);
    }
});
console.log(res);

var yajsh = exports,
    krasota = require('krasota'),
    html = yajsh.html = require('./html');

yajsh.toHtml = function(js) {
    return krasota.matchTop(
        html.YetAnotherJSHighlighter,
        krasota.matchTop(krasota.KrasotaJSParser, js, 'JS parse'),
        'To HTML');
};

yajsh.toHtmlCss = function(js) {
    return '<style>' +
            require('stylus').render(
                require('fs').readFileSync(require.resolve('./html.styl'), 'utf-8')) +
        '</style>' +
        yajsh.toHtml(js);
};

yajsh.COA = require('./coa').COA;

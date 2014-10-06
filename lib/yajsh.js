var yajsh = exports,
    krasota = require('krasota'),
    html = yajsh.html = require('./html');

yajsh.toHTML = function(js) {
    return krasota.matchTop(
        html.YetAnotherJSHighlighter,
        krasota.matchTop(krasota.KrasotaJSParser, js, 'JS parse'),
        'To HTML');
}

yajsh.COA = require('./coa').COA;

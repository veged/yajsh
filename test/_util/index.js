require('chai').should();

var FS = require('fs'),
    PATH = require('path'),
    PRJ_ROOT = PATH.join(__dirname, '..', '..');

exports.testPlugins = function(testFile, prjRoot, plugins) {
    var yajsh = require('../../lib/yajsh'),
        baseName = PATH.basename(testFile, '.js');

    describe(baseName, function() {
        prjRoot || (prjRoot = PRJ_ROOT);
        var testFileDirName = PATH.dirname(testFile);
        FS.readdirSync(PATH.join(testFileDirName, baseName)).forEach(function(fileName) {
            if(PATH.extname(fileName) === '.js') {
                var dirName = PATH.join(testFileDirName, baseName),
                    jsFileName = PATH.join(dirName, fileName),
                    htmlFileName = PATH.join(dirName, fileName.replace(/\.js$/, '.exp.html')),
                    resFileName = PATH.join(dirName, fileName.replace(/\.js$/, '.res.html'));

                it(
                    PATH.relative(prjRoot, jsFileName) +
                        ' should be highlighted as expected in ' +
                        PATH.relative(prjRoot, htmlFileName),
                    function() {
                        // NOTE: JSON.parse(JSON.stringify(...)) because of Chai.js bug
                        var res = yajsh.toHTML(FS.readFileSync(jsFileName, 'utf-8'));
                        FS.writeFileSync(resFileName, res);
                        res.should.be.eql(
                            String(FS.readFileSync(htmlFileName)),
                            'Result file: ' + resFileName);
                    }
                );
            }
        });
    });
};

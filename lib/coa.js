var COA = exports.COA = require('coa').Cmd()
    .name('yajsh').helpful()
    .opt()
        .name('version').title('Version')
        .short('v').long('version')
        .only()
        .flag()
        .act(function(opts) {
            return JSON.parse(require('fs').readFileSync(__dirname + '/../package.json')).version;
        })
        .end()
    .opt()
        .name('input').title('Input file (default: stdin)')
        .short('i').long('input')
        .input()
        .end()
    .opt()
        .name('output').title('Output file (default: stdout)')
        .short('o').long('output')
        .output()
        .end()
    .act(function(options) {
        var YAJSH = require('./yajsh'),
            Q = require('q'),
            input = [],
            deferred = Q.defer();

        options.input
            .on('data', function(c) { input.push(c) })
            .once('end', function() {
                var output = options.output;

                try {
                    output.write(YAJSH.toHTML(input.join('')));
                } catch(e) {
                    console.log(e);
                }

                output === process.stdout ?
                    output.write('\n') :
                    output.end();

                deferred.resolve();
            })
            .resume();

        return deferred.promise;
    });

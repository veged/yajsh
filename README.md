# Yet Another JavaScript Highlighter

## What is this?

Try to make good highlighter for JavaScript source code. WORK IN PROGRESS.

The main approach is to highlight things based on semantic.
For example brackets and other punctuation in different statements and literals should be a different color.

Right now HTML+CSS output is only supported.

## How to use?

### Command-line

*Note:* For using from command-line you should install it globally – `npm install -g yajsh`.

```
$ yajsh --help

Usage:
  yajsh [OPTIONS]


Options:
  -h, --help : Help
  -v, --version : Version
  -i INPUT, --input=INPUT : Input file (default: stdin)
  -o OUTPUT, --output=OUTPUT : Output file (default: stdout)
```

#### COA

Because of using [COA](https://github.com/veged/coa/) all command-line interface available through `require('yajsh').COA`.
Example:

```javascript
require('yajsh').COA
    .invoke({
        input: 'tests/bla.js',
        outpur: 'test/bla.js.html'
    })
```

#### OMeta

You can use `yajsh` through the `require('yajsh/lib/html').YetAnotherJSHighlighter` in terms of raw [OmetaJS](https://github.com/veged/ometa-js/)-grammas.

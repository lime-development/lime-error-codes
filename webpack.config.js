const path = require('path');

module.exports = {
    entry: './getErrorMessage.mjs',
    output: {
        filename: 'getErrorMessage.mjs',
        path: path.resolve(__dirname, 'dist'),
        library: '@lime-development/lime-errors-codes',
        libraryTarget: 'umd',
    },
    mode: 'production',
};

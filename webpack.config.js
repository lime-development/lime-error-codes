const path = require('path');

const commonConfig = {
  mode: 'production',
  entry: './getErrorMessage.mjs',
  resolve: {
    extensions: ['.mjs', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        type: 'json',
      },
    ],
  },
};

const umdConfig = {
  ...commonConfig,
  target: 'web',
  output: {
    filename: 'getErrorMessage.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: '@lime-development/lime-errors-codes',
      type: 'umd',
    },
    globalObject: 'this',
  },
};

const esmConfig = {
  ...commonConfig,
  target: 'web',
  output: {
    filename: 'getErrorMessage.mjs',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
};

module.exports = [umdConfig, esmConfig];
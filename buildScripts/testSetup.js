// register babel to transpile before test
require('babel-register');

// disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function () {};


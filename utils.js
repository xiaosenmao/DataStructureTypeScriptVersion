const { resolve } = require('path');

exports.normalizeAbsolutePath = path => resolve(__dirname, path);

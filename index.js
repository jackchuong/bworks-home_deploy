/* eslint-disable @typescript-eslint/no-var-requires */
const { setConfig } = require('next/config');
var path = require('path');
global.appRoot = path.resolve(__dirname);

setConfig(require('./next.config'));

require('./server');

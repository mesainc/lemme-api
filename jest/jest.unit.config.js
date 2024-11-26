// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./jest.config.js');
config.rootDir = '../src';
config.testRegex = '.*\\.spec\\.ts$';
module.exports = config;

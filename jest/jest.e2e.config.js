// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./jest.config.js');
config.coverageThreshold = {};
config.coverageDirectory = './coverage-integration';
config.collectCoverageFrom = [
  'src/**/*.(t|j)s',
  '!src/**/*.spec.(t|j)s',
  '!src/**/main.ts',
  '!src/**/swagger.ts',
  '!src/**/*entity.(t|j)s',
  '!src/**/*dto.(t|j)s',
  '!src/**/*module.(t|j)s',
  '!src/**/*model.(t|j)s',
  '!src/**/*mock*.(t|j)s',
  '!src/**/*enum.(t|j)s',
  '!src/**/*.interface.(t|j)s',
];
config.rootDir = '..';
config.testRegex = '.e2e-spec.ts$';
config.setupFiles = ['./jest/setup/setEnvironment.js'];
config.moduleNameMapper = {
  '^@Src/(.*)$': '<rootDir>/$1',
  '^@Shared/(.*)$': '<rootDir>/src/shared/$1',
};

module.exports = config;

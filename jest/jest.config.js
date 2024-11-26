module.exports = {
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  setupFiles: ['../jest/setup/setEnvironment.js'],
  collectCoverageFrom: [
    '**/*.(t|j)s',
    '!**/*.spec.(t|j)s',
    '!**/main.ts',
    '!**/*entity.(t|j)s',
    '!**/index.(t|j)s',
    '!**/*dto.(t|j)s',
    '!**/dto/*.(t|j)s',
    '!**/*module.(t|j)s',
    '!**/*model.(t|j)s',
    '!**/models/*.(t|j)s',
    '!**/*mock*.(t|j)s',
    '!**/mocks/*.(t|j)s',
    '!**/*enum.(t|j)s',
    '!**/migrations/*.(t|j)s',
    '!**/errors/*.(t|j)s',
    '!**/config/*.(t|j)s',
    '!**/env-config.ts',
    '!**/*.interface.(t|j)s',
    '!**/fakes/*.(t|j)s',
    '!**/*repository.(t|j)s',
    '!**/*interface.(t|j)s',
    '!**/*datasource.(t|j)s',
  ],
  moduleNameMapper: {
    '^@Src/(.*)': '<rootDir>/$1',
    '^@Shared/(.*)': '<rootDir>/shared/$1',
  },
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};

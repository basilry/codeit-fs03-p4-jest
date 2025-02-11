/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  testMatch: ['**/__tests__/**/*.js'],
};

module.exports = config;
module.exports = {
  projects: [
    {
      displayName: 'static-app',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/tests/**/*-test.[jt]s?(x)'],
      globalSetup: '<rootDir>/jest/global-setup.js',
      globalTeardown: '<rootDir>/jest/global-teardown.js',
      setupFilesAfterEnv: ['<rootDir>/jest/setup.js']
    }
  ]
};

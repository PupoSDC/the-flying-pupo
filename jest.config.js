const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/src/jest.setup.js'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@widu/(.*)$': '<rootDir>/src/$1',
      },
    "collectCoverageFrom": [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.{test,spec,stories,example}.{js,jsx,ts,tsx}",
        "!src/**/{__tests__,__stories__,__mocks__}/*",
        "!src/*.{js,jsx,ts,tsx}",
        "!src/init/*.{js,jsx,ts,tsx}"
    ],
    "coverageThreshold": {
        "global": {
            "statements": 90,
            "branches": 90,
            "functions": 90,
            "lines": 90
        }
    }
}

module.exports = createJestConfig(customJestConfig)
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  // testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    "^@shared/(.*)$": "<rootDir>/src/modules/shared/$1",
    "^@home/(.*)$": "<rootDir>/src/modules/home/$1",
    "^@about/(.*)$": "<rootDir>/src/modules/about/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/cypress/"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);

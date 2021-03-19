module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    ".(css|less|sass|scss)$": "jest-transform-css",
    "~/(.*)": "<rootDir>/src/$1"
  }
};

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  // moduleDirectories: ["node_modules", "./src"],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1"
  }
};

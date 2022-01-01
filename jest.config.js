const config = {
  testMatch: ["**/test/**/*.+(ts)"],
  testPathIgnorePatterns: ["/node_modules/", "/test/utils/", "dist/"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};

module.exports = config;

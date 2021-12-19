const config = {
  testMatch: ["**/test/**/*.+(ts)"],
  testPathIgnorePatterns: ["/node_modules/", "/test/utils/"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};

module.exports = config;

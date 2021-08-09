module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'json'
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/dist/"
  ],
  transform: {
    "^.+\\.ts$": "ts-jest",
    '^.+\\.js$': 'babel-jest',
  }
}

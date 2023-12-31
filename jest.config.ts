const jestConfig = {
  verbose: true,
  preset: 'jest-expo',
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg|avif)$': '<rootDir>/fileMock.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|he|@react-native-async-storage/async-storage)',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '.*.svg',
    '.*.png',
    'jest.setup.ts',
    'jest.config.ts',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.ts',
  ],
}

export default jestConfig

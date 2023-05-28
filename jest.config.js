module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/'],
    testMatch: ['<rootDir>/src/test/App.test.js'],
    moduleNameMapper: {
        "^.+\\.(css|less)$": "<rootDir>/config/cssTub.js",
        "\\.(gif|ttf|png|svg)$": "<rootDir>/config/imagesTub.js"
    },
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.js"
    ],
    testEnvironment: "jsdom"
};

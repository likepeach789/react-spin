module.exports = {
    "rootDir": "src",
    setupFiles: ["<rootDir>/__tests__/setup.js"],
    "moduleNameMapper": {
        "^.+\\.(css|less|scss)$": "babel-jest"
    },
    "transform": {
        "^.+\\.[t|j]sx?$": "babel-jest"
    },
    "testRegex": "\\.test\\.(jsx?|tsx?)$",
    collectCoverage: true,
    "coverageDirectory": "<rootDir>/__tests__/coverage",
};
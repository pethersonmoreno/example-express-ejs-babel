module.exports = {
    verbose: true,
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/dist/**",
        "!**/coverage/**",
        "!jest.config.js"
    ],
    coverageThreshold: {
        global: {
            branches: 10,
            functions: 10,
            lines: 10,
            statements: 10
        }
    }
};

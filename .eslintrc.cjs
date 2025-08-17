/* eslint-env node */
module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "detect" } },
    env: { browser: true, es2022: true, node: true },
    plugins: ["@typescript-eslint", "react-hooks", "react-refresh"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react-refresh/recommended",
        "prettier"
    ],
    rules: {
        "@typescript-eslint/no-explicit-any": "off"
    },
    ignorePatterns: ["dist", "node_modules"]
};
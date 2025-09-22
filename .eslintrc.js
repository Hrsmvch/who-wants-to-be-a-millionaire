module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
  },
  plugins: ["@typescript-eslint"],
  ignorePatterns: [".eslintrc.js", "*.config.js",  "next-env.d.ts"],
};

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "esnext",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.eslint.json"]
  },
  ignorePatterns: ["*.js"],
  plugins: ["@typescript-eslint", "simple-import-sort"],
  extends: ["next/core-web-vitals","eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended-requiring-type-checking"],
  rules: {
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-unused-vars": "off",
    "no-control-regex": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/typedef": "error",
    "@typescript-eslint/no-var-requires": "off"
  }
};
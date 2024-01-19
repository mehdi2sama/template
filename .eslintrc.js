const path = require("path");

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    es2021: false,
    mocha: true,
    node: false,
  },
  extends: ["plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    "@typescript-eslint",
    "prettier",
    "simple-import-sort",
    "sort-keys-fix",
    "typescript-sort-keys",
  ],
  rules: {
    "@typescript-eslint/sort-type-union-intersection-members": "error",
    camelcase: "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "sort-keys-fix/sort-keys-fix": "error",
    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
      typescript: {
        project: path.join(__dirname, "tsconfig.json"),
      },
    },
  },
};

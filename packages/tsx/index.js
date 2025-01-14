require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "@qedjs/eslint-config-react",
    // base comes after react because it includes prettier, and it needs to be the last.
    "@qedjs/eslint-config-base",
  ],

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
};

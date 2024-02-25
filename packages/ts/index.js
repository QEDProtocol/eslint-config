require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["@qedjs/eslint-config-base"],

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
  },
};

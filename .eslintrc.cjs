module.exports = {
  // ...
  overrides: [
    {
      files: ["**/*.jsc"],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module", // Đảm bảo đã đặt sourceType là 'module'
      },
      extends: "next",
      rules: {
        "react/jsx-filename-extension": "off",
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off",
      },
      parser: "babel-eslint",
    },
  ],
};

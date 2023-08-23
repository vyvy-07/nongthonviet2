module.exports = {
  // ...
  overrides: [
    {
      files: ["**/*.jsc"],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module", // Đảm bảo đã đặt sourceType là 'module'
      },
      rules: {
        "react/jsx-filename-extension": "off",
        "react/no-unescaped-entities": "off",
      },
      parser: "babel-eslint",
    },
  ],
};

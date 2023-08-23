module.exports = {
  // ...
  overrides: [
    {
      files: ["**/*.jsc"],

      extends: "next",
      rules: {
        "react/jsx-filename-extension": "off",
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off",
      },
    },
  ],
};

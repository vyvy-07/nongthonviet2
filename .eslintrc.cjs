module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: "next",
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
  },
  parserOptions: {
    sourceType: "module", // Đảm bảo sourceType là 'module'
  },
};

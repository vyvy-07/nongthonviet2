module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  // extends: "react",
  rules: {
    // "react/no-unescaped-entities": "off",
    // "@next/next/no-page-custom-font": "off",
    "react/jsx-no-undef": "off", // Tắt kiểm tra dấu ngoặc nhọn
  },
  parserOptions: {
    sourceType: "module",
  },
};

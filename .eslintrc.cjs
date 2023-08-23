module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  // extends: "react",
  parserOptions: {
    sourceType: "module", // Đảm bảo sourceType là 'module'
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }], // Cho phép sử dụng JSX trong tệp .js và .jsx
  },
};

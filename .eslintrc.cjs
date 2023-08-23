module.exports = {
  // ...
  overrides: [
    {
      files: ["**/*.jsc"], // Áp dụng cho tất cả các tệp có phần mở rộng .jsc
      rules: {
        "react/jsx-filename-extension": "off", // Tắt kiểm tra phần mở rộng tệp JSX
      },
    },
  ],
};

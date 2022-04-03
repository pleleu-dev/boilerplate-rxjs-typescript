const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@stores": path.resolve(__dirname, "src/stores"),
      "@world": path.resolve(__dirname, "src/world"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
};

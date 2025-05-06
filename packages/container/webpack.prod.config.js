const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    publicPath: "https://your-production-url.com:8090/",
  },
  plugins: [
    new baseConfig.plugins[0].constructor({
      ...baseConfig.plugins[0].options,
      remotes: {
        products: "products@https://your-production-url.com:8091/products/remoteEntry.js",
        cart: "cart@https://your-production-url.com:8091/cart/remoteEntry.js",
      },
    }),
  ],
});

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api/products': {
        target: 'http://10.20.5.13:8085', // http://192.168.156.50:8085/api/products/allProducts
        changeOrigin: true,
        pathRewrite: {'^/api' : ''},
      },
      '^/api/cart': {
        target: 'http://10.20.5.13:8092',
        changeOrigin: true,
        pathRewrite: {'^/api' : ''},
      },
      '^/api/profile': {
        target: 'http://10.20.5.13:8091',
        changeOrigin: true,
        pathRewrite: {'^/api' : ''},
      },
      '^/api/users': {
        target: 'http://10.20.5.13:8087',
        changeOrigin: true,
        pathRewrite: {'^/api' : ''},
      },
      "^/api/merchant": {
        target: "http://10.20.5.13:8081",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
  }
}
});

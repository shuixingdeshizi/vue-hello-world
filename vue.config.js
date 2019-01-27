module.exports = {
  devServer: {
    proxy: {
      '/proxy': {
        target: 'https://m.weibo.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': ''
        }
      }
    }
  }
}
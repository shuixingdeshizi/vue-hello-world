module.exports = {
  runtimeCompiler: true,
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
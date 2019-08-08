module.exports = {
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: Infinity }))
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/VueFeedbackReaction/'
    : '/'
}

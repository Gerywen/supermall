const px2rem = require('postcss-plugin-px2rem')
const postcss = px2rem({
  rootValue: 14,
  unitPrecision: 5,
  propWhiteList: ['font','font-size','letter-spacing'],
  selectorBlackList:[],
  replace: true,
  mediaQuery: false,
  minPixelValue: 0,
  exclude: /node_modules/i
})
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  css: {
    loaderOptions:{
      postcss:{
        plugins:[postcss]
      }
    }
  }
}

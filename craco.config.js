// const cracoAlias = require("craco-alias");
const path = require('path')

module.exports = {
  mode: 'development',
  // Adding Server
  devServer: {
    port: 9000,
  },
  // plugins: [
  //   {
  //     plugin: cracoAlias,
  //     options: {
  //       baseUrl: "./src",
  //       source: "jsconfig",
  //     }
  //   }
  // ],
  webpack: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/@core/assets'),
      '@components': path.resolve(__dirname, 'src/@core/components'),
      '@layouts': path.resolve(__dirname, 'src/@core/layouts'),
      '@store': path.resolve(__dirname, 'src/redux'),
      '@styles': path.resolve(__dirname, 'src/@core/scss'),
      '@configs': path.resolve(__dirname, 'src/configs'),
      '@utils': path.resolve(__dirname, 'src/utility/Utils'),
      '@hooks': path.resolve(__dirname, 'src/utility/hooks')
    }
}
};

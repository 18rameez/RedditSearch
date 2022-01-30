const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {

    entry:'./src/js/index.js',
    output: {
        path: __dirname+'./dist',
        filename:'bundle.js'
    },
    mode: 'development',
    devServer: {
        // contentBase
        static : {
          directory : path.join(__dirname, "/")
        },
        port: 9000,
        // publicPath
        devMiddleware:{
           publicPath: "/",
        }
      },

      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: 'index.html'
        })
      ],

}
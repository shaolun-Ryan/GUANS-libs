const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'guans-style.js',
      //这个是用来在标签引入的时候，可以作为全局变量，调用方法
      // libraryTarget: 'umd',
      // umdNamedDefine: true
    },
    module: {
        rules: [
            { test: /.css$/, use: ['style-loader', 'css-loader']},
          //   {
          //     test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
          //     use: ['file-loader']
          // }
        ]
    }, 
    devServer: {
      contentBase: path.join(__dirname, "dist")
    },
    performance: {
      hints: false
  }
};
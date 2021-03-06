const path = require('path');

module.exports = {
    mode:'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'deltamap.min.js',
      //这个是用来在标签引入的时候，可以作为全局变量，调用方法
      library: 'dm',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    module: {
        rules: [
            { test: /.css$/, use: ['style-loader', 'css-loader']}
        ]
    }, 
    devServer: {
      contentBase: path.join(__dirname, "dist")
    },
    performance: {
      hints: false
  }
};
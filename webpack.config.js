const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/main.web', // 入口文件
  output: {
    path: path.resolve(__dirname, 'build'), // 输出目录
    filename: 'bundle.web.js' // 输出文件
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // ts文件处理
        use: 'ts-loader'
      },
      {
        test: /\.scss$/, // scss文件处理
        use: [MiniCssPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/, // css文件处理
        use: [MiniCssPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['main'], // chunk名称，entry是字符串类型，因此chunk为main
      filename: 'index.html', // 输出到build目录的文件名
      template: 'src/index.html' // 模板路径
    }),
    new MiniCssPlugin({
      filename: 'styles/[name].[contenthash:8].css', // 输出的css文件名
      chunkFilename: 'styles/[name].[contenthash:8].css'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'] // 添加ts和tsx后缀
  }
}
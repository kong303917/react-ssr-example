const path = require('path')
const MiniCssPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/main.ssr',
  target: 'node', // 必须指定为Node.js，否则会打包Node.js内置模块
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.ssr.js',
    libraryTarget: 'commonjs2' // 打包为Commonjs模块才能被Node.js加载
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [MiniCssPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssPlugin({
      filename: 'styles/[name].[contenthash:8].css',
      chunkFilename: 'styles/[name].[contenthash:8].css'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
}
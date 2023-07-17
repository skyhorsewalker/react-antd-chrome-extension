const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production', // 'production'或者'development'，根据需求选择模式
  entry: {
    background: path.resolve('public/background.js'),
    content: path.resolve('public/content.js'),
    popup: path.resolve('src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve('public/static'),
        to: path.resolve('build/static')
      }, {
        from: path.resolve('public/manifest.json'),
        to: path.resolve('build')
      },],
    }),
    // ...getHtmlPlugins(['popup',]),
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      template: 'public/popup.html',
      chunks: ['popup'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    minimize: false
  },
}

function getHtmlPlugins(chunks) {
  return chunks.map(chunk => new HtmlWebpackPlugin({
    title: 'My Extension',
    filename: `${chunk}.html`,
    chunks: [chunk]
  }))
}

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: 'style-loader',
            }, {
              loader: 'css-loader',
            }, {
              loader: 'resolve-url-loader',
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true, // <-- !!IMPORTANT!!
              }
            }
          ]
        },
        {
          test: /\.(jpg|png|svg|gif)$/,
          type: 'asset/resource',
        },
    ]
  },
};
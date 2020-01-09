const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 10000, // Convert images < 8kb to base64 strings
                name: 'images/[name].[ext]'
            } 
        }]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dataflix Styleguide',
      inject: true,
      template: './src/index.html',
      minify: {
          html5: true,
          collapseWhitespace: true,
          caseSensitive: true,
          removeComments: true,
          removeEmptyElements: true
      }
    })
  ]
};
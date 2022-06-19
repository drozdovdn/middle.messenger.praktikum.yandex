const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const _path = (alias) => {
  return path.resolve(__dirname, alias);
};

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: _path('dist'),
    filename: '[name]-[hash:4].js',
  },
  devServer: {
    static: {
      directory: _path('dist'),
    },
    port: 3000,
    open: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_module/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: _path('tsconfig.json'),
          },
        },
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: _path('static/index.html'),
    }),
    new CopyPlugin({
      patterns: [{ from: _path('static/icons'), to: _path('dist') }],
    }),
  ],
};

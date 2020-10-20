const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  target: 'node',
  // context: path.resolve(__dirname, 'dist'),
  node: {
    __filename: false,
    __dirname: false,
  },
  externals: [nodeExternals()],
  mode: 'production',
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/public', to: './public' },
        { from: 'package.json' },
      ],
    }),
  ],
};

const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');
const pkg = require('./package.json');

module.exports = merge(common, {
  entry: {
    main: path.join(__dirname, './src/FitxForm/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: pkg.name,
    libraryTarget: 'umd',
    publicPath: '/lib/',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({}),
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});

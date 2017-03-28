const path = require("path");
const webpack = require("webpack");

var config = {
  entry: {
    script: path.resolve(__dirname, './src/main.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../app/assets/javascripts'),
    pathinfo: true
  },
   module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devtool: 'eval-source-map',
  plugins: []
};

switch(process.env.NODE_ENV) {
  case 'development':
    config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }))
  case 'staging':
    delete config.devtool;
    config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"staging"' }))
  case 'production':
    delete config.devtool;
    config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }))
}

module.exports = config;

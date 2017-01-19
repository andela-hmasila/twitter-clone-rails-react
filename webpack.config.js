var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app/assets/javascripts',
  entry: [
    'webpack-dev-server/client?http://127.0.0.0:8080/',
    'webpack/hot/only-dev-server',
    './components.js'
  ],
  output: {
    filename: '[name]_wp_bundle.js', // Will output App_wp_bundle.js
    path: __dirname + '/app/assets/javascripts', // Save to Rails Asset Pipeline
    publicPath: 'http://localhost:8080/assets' // Required for webpack-dev-server
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      // "test" is commonly used to match the file extension
      test: /\.jsx$/,
      // the "loader"
      loaders: ["babel?presets[]=react,presets[]=es2015"]
    }]
  }
}

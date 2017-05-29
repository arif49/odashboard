var webpack = require('webpack'),
  visualizer = require('webpack-visualizer-plugin'),
  cleanWebpackPlugin=require('clean-webpack-plugin');

module.exports = {

  devtool: '#inline-source-map',
  plugins: [
    new visualizer({
      filename: './webpack.html'
    }),
    new cleanWebpackPlugin(['dist', 'static'], {
      verbose: true,
      dry: false
    })
    /*
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {comments: false}
    }),
    new webpack.optimize.DedupePlugin()
    */
  ],
  entry: {
    main: ['./src/main']
  },
  output: {
    path:  __dirname + '/static',
    filename: 'bundle.js'
  }
};

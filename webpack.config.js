var webpack = require('webpack'),
    visualizer = require('webpack-visualizer-plugin');

module.exports = {

  devtool: '#inline-source-map',
  plugins: [
    new visualizer({
      filename: './statistics.html'
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
    path: __dirname + '/static',
    filename: 'bundle.js'
  }
};

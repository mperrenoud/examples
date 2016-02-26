module.exports = {
  devtool: 'eval-source-map',

  entry: "./app/main.jsx",
  output: {
    path: "./public",
    filename: "react101.js"
  },

  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: "json"
    }, {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
}

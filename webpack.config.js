module.exports = {
  context: __dirname + '/app',
  mode: 'none',
  entry: './entry',
  output: {
    path: __dirname + '/public/javascripts',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules|routes/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};
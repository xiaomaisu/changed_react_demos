var path = require('path');
var webpack = require('webpack');
module.exports = {
  devtool: '#source-map',
  entry: [ 
  		  'webpack/hot/dev-server',
          'webpack-dev-server/client?http://localhost:3000',
  		    path.resolve('./demo01/main.js')
  		 ],
  output: {
    path: path.resolve('./demo01/build'),
    publicPath: '/',
    filename: 'bundle_1.js'
  },
  module: {
        loaders: [
            {
                test: /\.js?$/,
                include: [path.resolve(__dirname, 'demo01')],
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            }
        ]
   },
  plugins: [
        new webpack.HotModuleReplacementPlugin()
  ]
};
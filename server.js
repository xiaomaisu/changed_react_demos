var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require('./webpack.config');
var portfinder = require('portfinder');
var path = require('path');

portfinder.basePort = 3000;//防止端口冲突

portfinder.getPort(function(portFinderErr, port){
    var devBundle = [ 
        'webpack/hot/dev-server',
          'webpack-dev-server/client?http://localhost:3000',
          path.resolve(__dirname, './demo01/main.js')
    ];
    webpackConfig.entry = devBundle;
    var compiler = webpack(webpackConfig);
    var server = new WebpackDevServer(compiler, {
       contentBase: './demo01',
       hot: true,
       stats: {
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }
    });

    server.listen(port, function(){
        console.log('react dev server start at localhost:%s', port);
    });
});

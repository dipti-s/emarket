var path = require('path');
var BUILD_DIR = path.resolve( __dirname, 'public/dist');
var APP_DIR = path.resolve( __dirname, 'app/components');
console.log("App dir :" +BUILD_DIR);
console.log("APP dir:" + APP_DIR);

module.exports = {
    entry: APP_DIR + "/entry.jsx",
    output: {
            path: BUILD_DIR,
            filename: "bundle.js"
    },

    module: {
        loaders: [
            { 
				test: /\.css$/,
				loader: "style!css"
			},
			{
				test: [/\.jsx$/,/\.es6$/],
				exclude: /node_modules/,
				loader: 'babel-loader',
                query:
                  {
                    presets:['react']
                  }
		    }
        ]
    },

    resolve: {
        root: __dirname+'/app'
    },

	devServer: {
        inline:true,
        port: 8008
  },
};
module.exports = {
    entry: "./app/entry.jsx",
    output: {
            path: './public/dist',
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
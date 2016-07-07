var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: [
        `webpack-dev-server/client?http://localhost:${process.env.PORT || 3000}`,
        'webpack/hot/only-dev-server',
        './src/index'
    ],

    output: {
        path: __dirname,
        filename: 'bundle.js',
        publickPath: ''
    },

    devtools: 'eval',

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            },
			{
				test: /\.sass$/,
				loaders: ['style', 'css', 'sass']
			}
        ]
    },

    devServer: {
        host: 'localhost',
        port: process.env.PORT || 3000,
        hot: true
    }
};
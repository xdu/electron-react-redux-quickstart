var webpack = require( 'webpack' );

var config = {
    
    devtool: 'eval-source-map',
    entry: __dirname + '/js/app.js',

    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },

    // the keyword jQuery will be available in every module without explicit require() call.
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
        })
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: { presets: ['es2015', 'react'] }
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.json$/, loader: 'json'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }]  
    },
      
    target : "electron",
      
    devServer: {
        contentBase: './public',
        colors: true,
        inline: true
    }
}

module.exports = config;
module.exports = {
    context: __dirname+"/app/src",
    entry: "./index.jsx",
    output: {
        path: __dirname + "/app/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: ['babel-loader'],
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    devServer: {
        inline: true,
        port: 3000
    }
}

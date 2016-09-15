module.exports = {
    context: __dirname,
    entry: "./index.jsx",
    output: {
        path: __dirname + "/dist",
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

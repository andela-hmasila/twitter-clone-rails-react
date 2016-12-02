module.exports = {
    entry: './app/assets/frontend/main.jsx',
    output: {
        path: './app/assets/javascripts',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            // "test" is commonly used to match the file extension
            test: /\.jsx$/,
            // the "loader"
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}

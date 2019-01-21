const path = require('path')

module.exports = {
    entry: {
        main: './src/main.js'
    },
    mode: 'development',
    output: {
        filename: "[name]-bundle.js", // name replaced by entry key name (i.e. main: without the colon)
        path: path.resolve(__dirname, '../dist'),
        publicPath: "/" // subfolder to put bundle in (no subfolder = "/")
    },
    devServer: {
        contentBase: "dist"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ // these loaders will run in reverse order
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    }
}

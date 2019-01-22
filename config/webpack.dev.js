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
        contentBase: "dist",
        overlay: true // show errors in page overlay, not only in console (rquires restart of webpack-dev-server)
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
            },
            {
                test: /\.html$/,
                use: [ // these loaders will run in reverse order
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].html"
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ["img:src"]
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|gif|png)$/,
                use: [ // these loaders will run in reverse order
                    {
                        loader: 'file-loader',
                        options: {
                            name: "images/[name]-[hash:8].[ext]"
                        }    
                    }
                ]
            }
        ]
    }
}

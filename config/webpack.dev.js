const path = require('path')

module.exports = {
    entry: {
        klopps: './src/main.js'
    },
    mode: 'development',
    output: {
        filename: "[name]-bundle.js", // name replaced by entry key name (i.e. main: without the colon)
        path: path.resolve(__dirname, '../dist')
    }
}

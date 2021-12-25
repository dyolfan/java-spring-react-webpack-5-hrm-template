const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack");

module.exports = {
    entry: [
        // Runtime code for hot module replacement
        'webpack/hot/dev-server.js',
        // Dev server client for web socket transport, hot and live reload logic
        'webpack-dev-server/client/index.js?hot=true&live-reload=true',
        // Your entry
        './src/index.tsx',
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    target: 'web',
    optimization: {
        runtimeChunk: 'single'
    },
    // Where files should be sent once they are bundled
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        static: path.join(__dirname, "dist"),
        historyApiFallback: true,
        port: 4200,
        hot: true,
        open: true
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
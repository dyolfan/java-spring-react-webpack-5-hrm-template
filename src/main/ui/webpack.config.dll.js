const { DllPlugin } = require("webpack");
const path = require("path");

module.exports = {
    context: __dirname,
    entry: {
        vendor: [path.join(__dirname, "vendor.js")]
    },
    devtool: "#source-map",
    mode: "development",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        library: "[name]"
    },
    plugins: [
        new DllPlugin({
            path: path.join(__dirname, "dist", "[name]-manifest.json"),
            name: "[name]"
        })
    ]
};
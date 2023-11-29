const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/app.js",
    mode: "production",
    performance: { // disable warnings about bundle size
        hints: false,
    },    
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/", // set a "public" path that you can navigate to in your browser - this lets "fetch" grab the file from the server
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg)$/i,
                type: "asset/resource",
            },
            {
                // Embed GLSL files as strings
                test: /\.(glsl|vert|frag)$/i,
                type: "asset/source",
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./index.html",
    })],
};

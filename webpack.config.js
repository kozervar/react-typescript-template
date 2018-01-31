const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const HTML_OPTIONS = {
    template: "./index.html",
    minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true
    }
};

module.exports = {
    // entry: "./src/index.tsx",
    entry: {
        hello: './src/helloApp.tsx',
        world: './src/worldApp.tsx',
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: path.resolve(__dirname, "scripts/raido-react-ui"),
        filename: "[name].js",
        chunkFilename: '[name]-chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true,
                            }
                        },
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(HTML_OPTIONS),
        new ExtractTextPlugin("raido-react-ui.css"),
        // new UglifyJSPlugin(),
        new CleanWebpackPlugin(["scripts/raido-react-ui"]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        })
    ],
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    devServer: {
        port: 3000,
        contentBase: "./",
        historyApiFallback: true
    }
};

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isDev = argv.mode !== "production";

  return {
    devtool: isDev ? "source-map" : false,

    entry: path.resolve(__dirname, "./src/index"),

    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "./dist"),
      assetModuleFilename: "assets/[hash][ext][query]",
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(css|styl)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 0,
              },
            },
            "postcss-loader",
            "stylus-loader",
          ],
        },
        {
          test: /\.(jpg|png)$/,
          type: "asset/resource",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
          type: "javascript/auto",
          issuer: /\.(js|ts)x?$/,
        },
      ],
    },
    resolve: {
      extensions: ["*", ".ts", ".tsx", ".js", ".jsx"],
      plugins: [new TsconfigPathsPlugin()],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        title: "${PROJECT_NAME}",
        publicPath: "/",
      }),
    ],
    devServer: {
      historyApiFallback: true,
    },
  };
};

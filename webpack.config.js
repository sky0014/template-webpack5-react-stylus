const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";

  return {
    entry: path.resolve(__dirname, "./src/index.js"),

    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "./dist"),
      assetModuleFilename: "assets/[hash][ext][query]",
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
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
                importLoaders: 2,
                modules: {
                  auto: (filepath) =>
                    !/node_modules/i.test(filepath) &&
                    !/\.global\.\w+$/i.test(filepath),
                  localIdentContext: "src",
                  localIdentName: isDev
                    ? "[path][name]__[local]"
                    : "[hash:base64:8]",
                  exportLocalsConvention: "camelCaseOnly",
                },
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
      extensions: ["*", ".js", ".jsx"],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        title: "${PROJECT_NAME}",
        publicPath: "/",
      }),
    ],
    devServer: {
      contentBase: path.resolve(__dirname, "./dist"),
      historyApiFallback: true,
    },
  };
};

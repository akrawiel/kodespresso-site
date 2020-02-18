const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

const outputPath = prod ? "dist" : "public";

module.exports = {
  entry: {
    bundle: [path.resolve(__dirname, "src", "main.js")]
  },
  resolve: {
    alias: {
      svelte: path.resolve(__dirname, "node_modules", "svelte"),
      components: path.resolve(__dirname, "src", "components"),
      styles: path.resolve(__dirname, "src", "styles"),
      utilities: path.resolve(__dirname, "src", "utilities")
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"]
  },
  output: {
    path: path.resolve(__dirname, outputPath),
    filename: "[name].js",
    chunkFilename: "[name].[id].js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        esprima: {
          test: /[\\/]node_modules[\\/](esprima|sockjs-client)[\\/]/,
          filename: "vendors-e.[hash].js",
          chunks: "all"
        },
        svelte: {
          test: /[\\/]node_modules[\\/](svelte|js-yaml|html-entities)[\\/]/,
          filename: "vendors-s.[hash].js",
          chunks: "all"
        },
        others: {
          test: /[\\/]node_modules[\\/](?!esprima|sockjs-client|svelte|js-yaml|html-entities).+[\\/]/,
          filename: "vendors-o.[hash].js",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: [
          "babel-loader",
          {
            loader: "svelte-loader",
            options: {
              emitCss: true,
              hotReload: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        use: "babel-loader"
      }
    ]
  },
  mode,
  plugins: [
    prod
      ? new CleanWebpackPlugin({
          verbose: true,
          cleanStaleWebpackAssets: true,
          protectWebpackAssets: false,
          cleanOnceBeforeBuildPatterns: ["**/*", "!CNAME"]
        })
      : () => {},
    new HtmlWebpackPlugin({
      filename: prod ? "200.html" : "index.html",
      template: path.resolve(__dirname, "public", "index.html"),
      inject: false
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    prod
      ? new CopyPlugin([
          {
            from: path.resolve(__dirname, "public", "index.html"),
            to: path.resolve(__dirname, "dist", "200.html")
          },
          {
            from: path.resolve(__dirname, "public", "entries"),
            to: path.resolve(__dirname, "dist", "entries")
          },
          path.resolve(__dirname, "public", "favicon.png")
        ])
      : () => {}
  ],
  devServer: {
    historyApiFallback: true
  },
  devtool: prod ? false : "source-map"
};

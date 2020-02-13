const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

const outputPath = prod ? "dist" : "public";

module.exports = {
  entry: {
    bundle: ["./src/main.js"]
  },
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
      components: path.resolve("src", "components"),
      styles: path.resolve("src", "styles"),
      pages: path.resolve("src", "pages"),
      utilities: path.resolve("src", "utilities")
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"]
  },
  output: {
    path: __dirname + `/${outputPath}`,
    filename: "[name].js",
    chunkFilename: "[name].[id].js"
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: true
          }
        }
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
        test: /\.md$/,
        use: [
          {
            loader: "frontmatter-markdown-loader"
          }
        ]
      }
    ]
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    prod &&
      new CopyPlugin([
        {
          from: path.resolve("public", "index.html"),
          to: path.resolve("dist", "200.html")
        },
        path.resolve("public", "favicon.png")
      ])
  ],
  devServer: {
    historyApiFallback: true
  },
  devtool: prod ? false : "source-map"
};

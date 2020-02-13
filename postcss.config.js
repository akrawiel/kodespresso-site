const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

let plugins = [require("autoprefixer"), require("postcss-normalize")];

if (prod) {
  plugins = [...plugins, require("cssnano")];
}

module.exports = {
  plugins
};

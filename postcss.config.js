const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const precss = require("precss");

module.exports = {
  plugins: [tailwindcss("./tailwind.js"), autoprefixer, precss]
};

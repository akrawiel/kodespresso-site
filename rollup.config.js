import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import alias from "@rollup/plugin-alias";
import copy from "rollup-plugin-copy";

import autoprefixer from "autoprefixer";
import postcssNormalize from "postcss-normalize";

const production = !process.env.ROLLUP_WATCH;
const outputPath = production ? "dist" : "public";

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: `${outputPath}/build/bundle.js`
  },
  plugins: [
    production &&
      copy({
        targets: [
          { src: "public/index.html", dest: "dist", rename: "200.html" },
          { src: "public/favicon.png", dest: "dist" }
        ]
      }),
    alias({
      entries: [
        { find: "components", replacement: "./src/components" },
        { find: "styles", replacement: "./src/styles" },
        { find: "pages", replacement: "./src/pages" },
        { find: "utilities", replacement: "./src/utilities" }
      ]
    }),
    svelte({
      dev: !production,
      css: css => {
        css.write(`${outputPath}/build/bundle.css`);
      }
    }),
    postcss({
      minimize: production,
      sourceMap: true,
      plugins: [postcssNormalize(), autoprefixer()],
      extract: `${outputPath}/build/global.css`
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"]
    }),
    commonjs(),
    !production && serve(),
    !production && livereload("public"),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true
        });
      }
    }
  };
}

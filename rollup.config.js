import commonjs from "@rollup/plugin-commonjs";
import eslint from '@rollup/plugin-eslint';
import external from "rollup-plugin-peer-deps-external";
import json from '@rollup/plugin-json';
import prettier from 'rollup-plugin-prettier';
import { terser } from 'rollup-plugin-terser';
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      plugins: [prettier({
        parser: 'babel',
        "semi": true,
        "trailingComma": "none",
        "singleQuote": true,
        "printWidth": 80
      })]
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true,
      plugins: [prettier({
        parser: 'babel',
        "semi": true,
        "trailingComma": "none",
        "singleQuote": true,
        "printWidth": 80
      })]
    },
    {
      file: pkg.minified,
      format: "cjs",
      exports: "named",
      plugins: [terser()]
    }
  ],
  plugins: [
    json(),
    eslint(),
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true
    }),
    commonjs({
      include: ["node_modules/**"]
    })
  ]
};
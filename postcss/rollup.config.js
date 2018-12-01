import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";
import prepare from "rollup-prepare";

import cssnano from "cssnano";
import postcss from "rollup-plugin-postcss";

export default {
    ...prepare({
        pkg
    }),
    plugins: [
        commonjs({
            include: "node_modules/**"
        }),
        resolve(),
        postcss({
            plugins: [cssnano]
        }),
        babel({
            exclude: "node_modules/**",
            plugins: [
                [
                    "@babel/plugin-transform-react-jsx",
                    {
                        pragma: "h"
                    }
                ],
                [
                    "@babel/plugin-proposal-object-rest-spread",
                    { loose: true, useBuiltIns: true }
                ],
                ["@babel/plugin-proposal-class-properties", { loose: true }]
            ]
        }),
        terser()
    ]
};

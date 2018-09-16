import buble from "rollup-plugin-buble";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "rollup-plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import pkg from "./package.json";
import prepare from "rollup-prepare";
/**
 *
 * If you want to work with shadow Dom and css,
 * you can use postcss to return the minified css,
 * this will allow you to serve a better css
 * import postcss from "rollup-plugin-postcss";
 */
import cssnano from "cssnano";
import cssthis from "rollup-plugin-cssthis";

function plugins(classes = true) {
    return [
        commonjs({
            include: "node_modules/**"
        }),
        resolve(),
        cssthis({
            invoke: true,
            plugins: [cssnano]
        }),
        buble({
            jsx: "h",
            transforms: {
                classes
            },
            objectAssign: "Object.assign"
        }),
        terser(),
        filesize()
    ];
}

export default [
    {
        ...prepare({
            pkg,
            ignore: ["umd:es5"]
        }),
        plugins: plugins(false)
    },
    {
        ...prepare({
            pkg,
            ignore: ["umd:main", "main", "module"]
        }),
        plugins: plugins(true)
    }
];

import buble from "rollup-plugin-buble";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "rollup-plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import cssthis from "rollup-plugin-cssthis";
import cssnano from "cssnano";
import pkg from "./package.json";
import colors from "colors";

let external = Object.keys(pkg.dependencies || {}),
    globals = { atomico: "atomico" };

export default [
    {
        input: pkg.source,
        output: [
            {
                file: pkg.main,
                format: "cjs",
                sourcemap: true
            },
            {
                file: pkg.module,
                format: "es",
                sourcemap: true
            },
            {
                file: pkg["umd:main"],
                format: "umd",
                name: camelCase(pkg.name),
                sourcemap: true,
                globals
            }
        ],
        external,
        onwarn: logger,
        plugins: plugins(false)
    },
    {
        input: pkg.source,
        output: [
            {
                file: pkg["umd:es5"],
                format: "umd",
                name: camelCase(pkg.name),
                sourcemap: true,
                globals
            }
        ],
        external,
        onwarn: logger,
        plugins: plugins(true)
    }
];

function camelCase(string) {
    return string.replace(/-+([\w])/g, (all, letter) => letter.toUpperCase());
}
/**
 * avoid log "X" type of rollup error
 */
function logger(message, next) {
    if (/MIXED_EXPORTS|MISSING_GLOBAL_NAME|MIXED_EXPORTS/.test(message.code))
        return;
    next(message);
}
/**
 * Returns the generic plugins to be used for packaging
 * @param {boolean} classes - lets you disable the transformation of classes
 * @return {Array}
 */
function plugins(classes = true) {
    return [
        commonjs({
            include: "node_modules/**"
        }),
        resolve(),
        cssthis({
            plugins: [cssnano] // default []
        }),
        buble({
            jsx: "h",
            transforms: {
                classes
            },
            objectAssign: "Object.assign"
        }),
        terser(),
        filesize({
            /**
             * allows to generate the printing of the output size of each file
             */
            render(options, size, gzip, brotliSize, minifiedSize, bundle) {
                let title = colors.cyan.bold,
                    value = colors.yellow;
                return `${title(bundle.file)}  Min: ${value(
                    size
                )} Gzip: ${value(gzip)}`;
            }
        })
    ];
}

import buble from "rollup-plugin-buble";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "rollup-plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import cssthis from "rollup-plugin-cssthis";
import cssnano from "cssnano";
import pkg from "./package.json";
import colors from "colors";

export default {
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
            globals: getGlobals()
        }
        // {
        //     file: pkg.iife,
        //     format: "iife",
        //     name: camelCase(pkg.name),
        //     sourcemap: true,
        //     globals: getGlobals()
        // }
    ],
    external: Object.keys(pkg.dependencies || {}),
    onwarn: function(message, next) {
        if (
            /MIXED_EXPORTS|MISSING_GLOBAL_NAME|MIXED_EXPORTS/.test(message.code)
        )
            return;
        next(message);
    },
    plugins: [
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
                classes: false
            },
            objectAssign: "Object.assign"
        }),
        terser(),
        filesize({
            render(options, size, gzip, brotliSize, minifiedSize, bundle) {
                let title = colors.cyan.bold,
                    value = colors.yellow;
                return `${title(bundle.file)}  Min: ${value(
                    size
                )} Gzip: ${value(gzip)}`;
            }
        })
    ]
};

function camelCase(string) {
    return string.replace(/-+([\w])/g, (all, letter) => letter.toUpperCase());
}

function getGlobals(globals = {}) {
    Object.keys(pkg.dependencies || {}).forEach(name => {
        if (name in globals) return;
        globals[name] = camelCase(name);
    });
    return globals;
}

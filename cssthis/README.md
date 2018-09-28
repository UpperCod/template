# {{__name__}}

This is a small skeleton to create distributable components based on [Atomico](https://github.com/uppercod/atomico).

The component is packaged thanks to `rollup.config.js`, you can execute the commands

```bash
# alias rollup -c -w
npm run watch
# alias rollup -c
npm run build
```

## package.json

The output files of the package are defined within `package.json`, this is thanks to [rollup-prepare](https://github.com/uppercod/rollup-prepare).

```json
 "name": "{{__name__}}",
 "main": "dist/{{__name__}}.js",
 "umd:main": "dist/{{__name__}}.umd.js",
 "umd:es5": "dist/{{__name__}}.es5.umd.js",
 "module": "dist/{{__name__}}.m.js",
 "source": "src/index.js",
```

| Property | Description |
|-----------|-------------|
| name | Necessary for the exit of the files type `umd:*`|
| main | Allows to generate a component in output format **CJS** |
| umd:main | Allows to generate a component in output format **UMD** |
| umd:es5 | Allows to generate a component in output format **UMD** and **ES6** |
| module | Allows to generate a component in output format **ES** |
| source | component source file |
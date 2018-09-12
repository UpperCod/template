# atomico-starter-component

This is a small skeleton to create distributable components based on [Atomico](https://github.com/uppercod/atomico).

The component is packaged thanks to `rollup.config.js`, you can execute the commands

```bash
# alias rollup -c -w
npm run watch
# alias rollup -c
npm run build
```

## Directory observations

### index.html

It is recommended when packaging the component, print it inside the index.html.

### /static

by default it has the atomic logo and the base style for the index.html.


## Dependency observations

By default Atomico is recommended to stay as an external dependency, you can do without `cssthis-tag`, especially if you work directly with shadow-dom.

## package.json

The output files of the package are defined within `package.json`.

```json
 "name": "atomico-starter-component",
 "main": "dist/atomico-starter-component.js",
 "umd:main": "dist/atomico-starter-component.umd.js",
 "umd:es5": "dist/atomico-starter-component.es5.umd.js",
 "module": "dist/atomico-starter-component.m.js",
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
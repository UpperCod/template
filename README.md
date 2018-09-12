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
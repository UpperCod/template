# atomico-starter-component

Este es un pequeño esqueleto para crear componentes distribuibles a base de [Atomico](https://github.com/uppercod/atomico).

El componente se empaqueta gracias a `rollup.config.js`, puede ejecutar los comandos

```bash
# alias rollup -c -w
npm run watch
# alias rollup -c
npm run build
```

## Observaciones de directorio

### index.html

Es recomendable al momento de empaquetar el componente, imprimirlo dentro del index.html.

### /static

por defecto posee el logotipo de atomico y el estilo de base para el index.html


## Observaciones de dependencias

Por defecto Atomico se recomienda mantenerlo como una dependencia externa, ud puede prescindir de `cssthis-tag`, especialmente si trabajara directamente con shadow-dom

## package.json

Los ficheros de salida del empaquetado se definen dentro de `package.json`.

```json
  "name": "atomico-starter-component",
  "main": "dist/atomico-starter-component.js",
  "umd:main": "dist/atomico-starter-component.umd.js",
  "umd:es5": "dist/atomico-starter-component.es5.umd.js",
  "module": "dist/atomico-starter-component.m.js",
  "source": "src/index.js",
```

## package.json

Los ficheros de salida del empaquetado se definen dentro de `package.json`.

```json
 "name": "atomico-starter-component",
 "main": "dist/atomico-starter-component.js",
 "umd:main": "dist/atomico-starter-component.umd.js",
 "umd:es5": "dist/atomico-starter-component.es5.umd.js",
 "module": "dist/atomico-starter-component.m.js",
 "source": "src/index.js",
```

| Propiedad | Descripción |
|-----------|-------------|
| name | necesario para la salida de los ficheros `umd:*`|
| main | permite generar un componente en salida **CJS** |
| umd:main | permite generar un componente en salida **UMD** |
| umd:es5 | permite generar un componente en salida **UMD** y **ES6** |
| module | permite generar un componente en salida **ES** |
| source | origen del componente |
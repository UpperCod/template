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

Por defecto Atomico se recomienda mantenerse como una dependencia externa, ud puede prescindir de `cssthis-tag`, especialmente si trabajara directamente con shadow-dom
# leweek-react

Repositorio con ejemplos usados en el taller de React, para LeWeek2015.


### Observaciones

* Estos ejemplos dejan a un lado la mayoría de las herramientas actuales, React, más allá de ser una librería
es una forma de resolver los problemas del desarrollo web, el estilo, la plataforma, la facilidad o complejidad, nada de 
eso debería tener un gran efecto en nuestras practicas de programación.

* Cada ejemplo puede usarse con o sin un servidor, la ventaja de usar un servidor es que habilitamos el uso de las 
herramientas de desarrollo de react para [chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) 
y para [firefox](https://addons.mozilla.org/es/firefox/addon/react-devtools/)


### Necesario
* De inicio, necesitamos nodeJs y npm para instalar y urilizar babel.
* Como instalar [node](https://docs.npmjs.com/getting-started/installing-node)
* Con npm, instalaremos babel-cli y babel-presets-react como indica [react](http://facebook.github.io/react/docs/getting-started.html)
```node
npm install --global babel-cli
npm install babel-preset-react
```

### Traducción de JSX a JS.

* Ahora podrémos utilizar el comando `babel` para traducir el código `jsx` a `js`.
```sh
babel --presets react folder_components --watch --out-dir build
```
* `--presets react` indica que react será nuestra base para la traducción.
* `folder_components` es la carpeta con nuestros archivos jsx.
* `--watch` dejará activo el proceso de traducción hasta terminarlo de manera manual, muy útil para el desarrollo.
* `--out-dir build` indica que el directorio `build` será en donde apareceran nuestros archivos de salida.


### Comentarios, Dudas
* Twitter: [@billowblut](http://twitter.com/billowblut)
* Correo: [emedina@rubixware.com](mailto:emedina@rubixware.com)

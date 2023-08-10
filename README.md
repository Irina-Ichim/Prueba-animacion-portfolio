# Proyecto para Portafolio

Este proyecto es parte de mi portafolio y contiene varias pruebas de concepto y demostraciones. Cada prueba está organizada en archivos HTML separados. A continuación, se muestra una descripción de cada una de ellas:

## Pruebas

# Proyecto con Efecto de Movimiento de Cursor y Three.js

Este es un proyecto de ejemplo que muestra cómo crear un efecto de movimiento de cursor en una esfera utilizando la biblioteca Three.js. Además, se incluye una solución para enfrentar problemas de política de seguridad de mismo origen (CORS) al cargar imágenes locales en el navegador.

## Requisitos Previos

- Node.js (para configurar un servidor local si es necesario)
- Navegador web moderno


## Cómo Usar

1. Abre cada archivo HTML correspondiente a la prueba que deseas ver.
2. Navega entre las pruebas utilizando los enlaces proporcionados en la parte superior.

## Efecto de Movimiento de Cursor

El archivo `script3.js` contiene un código que permite que una esfera en la página siga el movimiento del cursor. Para lograr esto, se utiliza la biblioteca Three.js para crear y renderizar la escena en 3D. El código se encarga de actualizar la posición de la esfera en función del movimiento del cursor.

Para probar este efecto, asegúrate de tener una imagen llamada `globe.jpg` en la misma carpeta que el archivo HTML. Si enfrentas problemas de CORS al cargar la imagen local, sigue las instrucciones en la siguiente sección.

## Solucionando Problemas de CORS

Cuando intentas cargar una imagen local en una página web, es posible que te encuentres con errores de CORS debido a las políticas de seguridad del navegador. Para solucionar esto, puedes configurar un servidor local en tu máquina utilizando el paquete `http-server`.

1. Instala `http-server` globalmente si aún no lo has hecho:

   ```bash
   npm install -g http-server
   http-server
2. Abre el navegador:
    http://127.0.0.1:8080


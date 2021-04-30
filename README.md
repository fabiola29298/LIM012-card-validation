# 7-eleven - Tarjeta de crédito válida

**"7-eleven"** es una página web donde puedes comprar tus productos del supermercado y validar tu número de tarjeta de crédito/débito.
 [Pruébalo aquí.](https://fabiola29298.github.io/LIM012-card-validation/src/)


## Funcionalidades
- El sistema está dividido en dos secciones: Carrito, donde se muesta el catálogo de productos, y Pago, donde se muestra el total de costo de todos los productos seleccionados y el formulario de tarjeta de crédito/débito.
- El usuario puede escoger uno o varios productos del supermercado.
- El sistema muestra el total de costo de todos los productos en la sección de Pago.
- El sistema muestra el diseño de la tarjeta de crédito, anverso y reverso, cada vez que el usuario agrega sus datos se muestran en la animación de la tarjeta.
- El sistema muestra el logo de VISA y MASTERCARD dependiendo del número inicial de la tarjeta (4 y 5).
- El sistema valida el número de la tarjeta según el algoritmo de Luhn.

## Consideraciones técnicas sobre el proyecto
- El proyecto aplica el **algoritmo de Luhn**,  también llamado algoritmo de módulo 10, es un método de suma de verificación, se utiliza para validar números de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc. [Más info aquí](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn#:~:text=El%20algoritmo%20de%20Luhn%20o,cr%C3%A9dito%2C%20n%C3%BAmeros%20IMEI%2C%20etc.)
- Se puede ingresar el número de tarjeta independiente de la cantidad de dígitos.
- El sistema solo valida el número de tarjeta.
- Se asume que la entrada de datos en el formulario de la tarjeta siempre será números y letras.
- Se asume que si el número inicial del número de tarjeta es 4 será VISA y si es 5 será MASTERCARD.



## Manual de instalación

1.  📦 Instala las dependencias del proyecto con el comando `npm install`.
2. Ejecuta las pruebas unitarias (unit tests) con el comando `npm test`.
3. Para ver la interfaz del programa en el navegador, usa el comando
   `npm start` para arrancar el servidor web y dirígete a
   `http://localhost:5000` en tu navegador.

## Aprendizajes nuevos

* Animaciones con CSS. Siguiendo el tutorial [Taller de Diseño Web: Formulario Dinámico para Tarjeta de Crédito](https://youtu.be/7bciaLTTr7s)
* Realizar pruebas unitarias con `HTMLint` y `ESLINT`.
* Manejo del DOM y BOM con  `QuerySelector` y `window`

## Tecnología usada

* HTML
* CSS
* JavaScript

Este proyecto es parte de la ruta del bootcamp de [Laboratoria - Frontend Developer](https://www.laboratoria.la/). Estoy siguiendo esta ruta de forma personal y autodidacta para aprender en base a proyectos.


<div align="center">
  <h3>
    <a href="https://fabiola29298.github.io/LIM012-card-validation/src/">
      Demo 📱
    </a>
    <span> | </span>
    <a href="https://github.com/fabiola29298/js-validacionTarjeta">
      Código
    </a>
    <span> | </span>
    <a href="https://github.com/Laboratoria/bootcamp/tree/main/projects/01-card-validation">
      Instrucciones
    </a>
  </h3>
</div>

## Previsualización

![image](/src/img/preview2.png)
![image](/src/img/preview1.png)
![image](/src/img/preview3.png)
##




const pago = document.querySelector('#pago'),
carrito = document.querySelector('#carrito'),
btnAbrirFormulario = document.querySelector('.btn-abrir'),
btnVolver = document.querySelector('.btn-volver');
// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
  // btnAbrirFormulario.classList.toggle('active');
  // formulario.classList.toggle('active');
  pago.style.display = 'flex';
  carrito.style.display = 'none';
  const checkboxes = document.querySelectorAll('input[name="product"]:checked');

  checkboxes.forEach((checkbox) => {
    // colors.push(checkbox.value);
    console.log(checkbox);
  });

});
// Boton de volver a seleccionar productos
btnVolver.addEventListener('click', () => {
  pago.style.display = 'none';
  carrito.style.display = 'flex';
});


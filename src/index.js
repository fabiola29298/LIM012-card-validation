import validator from './validator.js';


const btnValidar = document.querySelector('.pagar');
const btnReiniciar = document.querySelector('.reiniciar');
const txtValidar = document.querySelector('#text-validar');
let textResultado = document.querySelector('#text-validar');
const numeroTarjetaCard = document.querySelector('.numero');
const numeroTarjeta = document.querySelector('#inputNumero'),
  nombreExpiracion = document.querySelector('#inputNombre'),
  mesExpiracion = document.querySelector('#selectMes'),
  yearExpiracion = document.querySelector('#selectYear'),
  ccv = document.querySelector('#inputCCV');
// Validator
btnValidar.addEventListener('click', () => {
  //llamar a la función isvalid
  if (numeroTarjeta.value == '' || numeroTarjeta.value == null || nombreExpiracion.value == ''
    || nombreExpiracion.value == null ){
    alert('Ingresa los datos');

  }
  else{
    numeroTarjeta.value = numeroTarjeta.value.replace(/\s/g, '');
    let validandoNumero = validator.isValid(numeroTarjeta.value);

    if (validandoNumero) {
      textResultado.innerText = 'Tu tarjeta es valida';
      textResultado.style.color = 'green';

    }
    else {
      textResultado.innerText = 'Tu tarjeta es no valida';
      textResultado.style.color = 'red';

    }
    numeroTarjeta.value = validator.maskify(numeroTarjeta.value);
    numeroTarjetaCard.innerText = numeroTarjeta.value;
    numeroTarjeta.disabled = true;
    nombreExpiracion.disabled = true;
    mesExpiracion.disabled = true;
    yearExpiracion.disabled = true;
    ccv.disabled = true;
    btnReiniciar.style.display = 'flex';
    btnValidar.style.display = 'none';
    // txtValidar.appendChild(textResultado);
  }


});


btnReiniciar.addEventListener('click', () => {
    numeroTarjeta.disabled = false;
    nombreExpiracion.disabled = false;
    mesExpiracion.disabled = false;
    yearExpiracion.disabled = false;
    ccv.disabled = false;
    btnValidar.style.display = 'flex';
    btnReiniciar.style.display = 'none';
  textResultado.innerText='';
});


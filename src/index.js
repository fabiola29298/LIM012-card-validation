import validator from './validator.js';


const btnValidar = document.querySelector('.pagar');
const txtValidar = document.querySelector('#text-validar');

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
    let imagen = document.createElement("P");
    if (validandoNumero) {
      imagen.innerText = 'Tu tarjeta es valida';
      imagen.style.color = "green";

    }
    else {
      imagen.innerText = 'Tu tarjeta es no valida';
      imagen.style.color = "red";

    }
    numeroTarjeta.value = validator.maskify(numeroTarjeta.value);
    numeroTarjetaCard.innerText = numeroTarjeta.value;
    numeroTarjeta.disabled = true;
    nombreExpiracion.disabled = true;
    mesExpiracion.disabled = true;
    yearExpiracion.disabled = true;
    ccv.disabled = true;
    txtValidar.appendChild(imagen);
  }


});



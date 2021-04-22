
  const tarjeta = document.querySelector('#tarjeta'),



    selectYear = document.querySelector('#selectYear'),
    selectMes = document.querySelector('#selectMes'),
    inputNumero = document.querySelector('#inputNumero'),
    inputNombre = document.querySelector('#inputNombre'),
  numeroTarjeta = document.querySelector('#tarjeta .numero'),
  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
  logoMarca = document.querySelector('#logo-marca'),
  firma = document.querySelector('#tarjeta .firma p'),
  mesExpiracion = document.querySelector('#tarjeta .mes'),
  yearExpiracion = document.querySelector('#tarjeta .year'),
  ccv = document.querySelector('#tarjeta .ccv'),
inputCCV = document.querySelector('#inputCCV');

// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
  if (tarjeta.classList.contains('active')) {
    tarjeta.classList.remove('active');
  }
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
  tarjeta.classList.toggle('active');
});


// * Select del mes generado dinamicamente.
for (let i = 1; i <= 12; i++) {
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
inputNumero.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  inputNumero.value = valorInput
    // Eliminamos espacios en blanco
    .replace(/\s/g, '')
    // Eliminar las letras
    .replace(/\D/g, '')
    // Ponemos espacio cada cuatro numeros
    .replace(/([0-9]{4})/g, '$1 ')
    // Elimina el ultimo espaciado
    .trim();
  numeroTarjeta.value = valorInput.replace(/\s/g, '');
  numeroTarjeta.textContent = valorInput;

  if (valorInput == '') {
    numeroTarjeta.textContent = '#### #### #### ####';

    logoMarca.innerHTML = '';
  }

  if (valorInput[0] == 4) {
    logoMarca.innerHTML = '';
    const imagen = document.createElement('img');
    imagen.src = 'img/logos/visa.png';
    logoMarca.appendChild(imagen);
  } else if (valorInput[0] == 5) {
    logoMarca.innerHTML = '';
    const imagen = document.createElement('img');
    imagen.src = 'img/logos/mastercard.png';
    logoMarca.appendChild(imagen);
  }

  // Volteamos la tarjeta para que el usuario vea el frente.
  mostrarFrente();
});

// * Input nombre de tarjeta
inputNombre.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  inputNombre.value = valorInput.replace(/[0-9]/g, '');
  nombreTarjeta.textContent = valorInput;
  firma.textContent = valorInput;

  if (valorInput == '') {
    nombreTarjeta.textContent = 'Jhon Doe';
  }

  mostrarFrente();
});

// * Select mes
document.querySelector('#selectMes').addEventListener('change', (e) => {
  mesExpiracion.textContent = e.target.value;
  mostrarFrente();
});

// * Select Año
document.querySelector('#selectYear').addEventListener('change', (e) => {
  yearExpiracion.textContent = e.target.value.slice(2);
  mostrarFrente();
});

// * CCV
inputCCV.addEventListener('keyup', () => {
  if (!tarjeta.classList.contains('active')) {
    tarjeta.classList.toggle('active');
  }

  inputCCV.value = inputCCV.value
    // Eliminar los espacios
    .replace(/\s/g, '')
    // Eliminar las letras
    .replace(/\D/g, '');

  ccv.textContent = inputCCV.value;
});

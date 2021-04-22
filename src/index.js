import validator from './validator.js';
// console.log(validator);


let listProducts = document.querySelector('.products');

// show list of products from data.json
function showProducts() {
  listProducts.innerHTML =``;
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'data.json', true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      for (let item of datos) {
        listProducts.innerHTML += `
          <div class="container">
            <img src="${item.url}" alt="">
            <div class="info-product">
              <input type="checkbox" name="product" value="${item.id}" />
              <label for="send_newsletter">
                <p class="item">${item.name}</p>
                <p class="price"> ${item.price} Bs</p>
              </label>
            </div>
          </div>
          `;
      }

    }
  }
}
showProducts();


const numeroTarjeta = document.querySelector('#tarjeta .numero');
const btnValidar = document.querySelector('.pagar');
const txtValidar = document.querySelector('#text-validar');

const nombreTarjeta = document.querySelector('#inputNumero'),
  mesExpiracion = document.querySelector('#inputNombre'),
  yearExpiracion = document.querySelector('#tarjeta #selectYear'),
  ccv = document.querySelector('#inputCCV');
// Validator
btnValidar.addEventListener('click', () => {
  //llamar a la función isvalid
  let validandoNumero = validator.isValid(numeroTarjeta.value);
  let imagen = document.createElement("P");
  if (validandoNumero){
    imagen.innerText = 'Tu tarjeta es valida';
    imagen.style.color= "green";

  }
  else{
    imagen.innerText = 'Tu tarjeta es no valida';
    imagen.style.color= "red";

  }
  nombreTarjeta.disabled = true;
  mesExpiracion.disabled = true;
  // yearExpiracion.disabled = true;
  // ccv.disabled = true;
  txtValidar.appendChild(imagen);

});



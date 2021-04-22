const viewPayment = document.querySelector('#payment'),
  viewCart = document.querySelector('#cart'),
  btnShowPayment = document.querySelector('.showPayment'),
  btnShowCart = document.querySelector('.showCart');
let divProductsSelected = document.querySelector('.list');
let divTotal = document.querySelector('.total');



  // show products
function showProductsList() {
  divProductsSelected.innerHTML = ``;
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'data.json', true);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      checkProducts(data);
    }
  }
}

// Create list of products
function checkProducts(data){
  let sum = 0 ;
  const checkboxes = document.querySelectorAll('input[name="product"]:checked');
  for (let item of data) {
    checkboxes.forEach((checkbox) => {
      if (item.id == checkbox.value) {
        sum += item.price;
        divProductsSelected.innerHTML += `
        <div class="item-list">
        <img src="${item.url}" alt="">
        <p class="item">${item.name}</p>
        <p class="price"> ${item.price}  Bs</p>
        </div>`;
      }
    })
  }
  // show total
  divTotal.innerHTML=`<p class="item">Total</p><p class="price"> ${sum} Bs</p>`;

}


// Open payment form, credit card and shopping cart list
btnShowPayment.addEventListener('click', () => {
  viewPayment.style.display = 'flex';
  viewCart.style.display = 'none';
  showProductsList();
});

// Open product list
btnShowCart.addEventListener('click', () => {
  viewPayment.style.display = 'none';
  viewCart.style.display = 'flex';
});


const modalCart = document.querySelector('.modal-cart'); // modal cart
const viewCart = document.querySelector('.viewCart'); // button view cart
const closetModal = document.querySelector('.closetModal'); // button closet Cart
const viewAll = document.querySelector('.viewAll'); //
const cart1 = document.querySelector('.card1'); // container card
const cart2 = document.querySelector('.card2'); 
const cart3 = document.querySelector('.card3'); 
const containerCard = document.querySelector('.container-card');
const viewHodies = document.querySelector('.viewHodies'); 
const viewShirt = document.querySelector('.viewShirt');
const viewSweatshirts = document.querySelector('.viewSweatshirts');
const cant = document.querySelector('.cant');
const pluss1 = document.querySelector('.pluss1');
const pluss2 = document.querySelector('.pluss2');
const pluss3 = document.querySelector('.pluss3');
const btnCheckout = document.querySelector('.btn-checkout');
const total = document.querySelector('.total');
const contadorProduct = document.querySelector('.contadorProduct1');

let contador = 0;
let suma = 0;
// abro y cierro el carrito de compras
viewCart.addEventListener('click', () => modalCart.style.display = 'block');
closetModal.addEventListener('click', () => modalCart.style.display = 'none');

// filtro tarjetas por categoria
viewAll.addEventListener('click', () => {
    cart1.style.display = 'block'; 
    cart2.style.display = "block";
    cart3.style.display = "block"
});
viewHodies.addEventListener('click', () => {
    cart1.style.display = 'block'; 
    cart2.style.display = "none";
    cart3.style.display = "none"
});

viewShirt.addEventListener('click', () => {
    cart1.style.display = 'none'; 
    cart2.style.display = "block";
    cart3.style.display = "none"
});

viewSweatshirts.addEventListener('click', () => {
    cart1.style.display = 'none'; 
    cart2.style.display = "none";
    cart3.style.display = "block"
});

function cont() {
    contador += 1;
    cant.textContent = contador;
    contadorProduct.textContent = contador;
}

pluss1.addEventListener('click', cont);
pluss2.addEventListener('click', cont);
pluss3.addEventListener('click', cont);

btnCheckout.addEventListener('click', () => {
    contador = 0;
    cant.textContent = contador;
    contadorProduct.textContent = contador;
});





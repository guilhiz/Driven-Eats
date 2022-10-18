let food;
let foodPrice = 0;
let drink;
let drinkPrice = 0;
let dessert;
let dessertPrice = 0;
let soma = 0;
let totalPrice = 0;

function foodClick(selected) {
  const foodActive = document.querySelector(".foods .active");
  if (foodActive !== null) {
    foodActive.classList.remove("active");
  }
  selected.classList.add("active");
  food = selected.querySelector("h3").textContent;
  foodPrice = selected.querySelector(".card-price").textContent.slice(3).replace(",", ".");
  buttonCheck();
  priceSum();
}

function drinkClick(selected) {
  const drinkActive = document.querySelector(".drinks .active");
  if (drinkActive !== null) {
    drinkActive.classList.remove("active");
  }
  selected.classList.add("active");
  drink = selected.querySelector("h3").textContent;
  drinkPrice = selected.querySelector(".card-price").textContent.slice(3).replace(",", ".");
  buttonCheck();
  priceSum();
}

function dessertClick(selected) {
  const dessertActive = document.querySelector(".desserts .active");
  if (dessertActive !== null) {
    dessertActive.classList.remove("active");
  }
  selected.classList.add("active");
  dessert = selected.querySelector("h3").textContent;
  dessertPrice = selected.querySelector(".card-price").textContent.slice(3).replace(",", ".");
  buttonCheck();
  priceSum();
}

function buttonCheck() {
  const button = document.getElementById("button");
  if (food !== undefined && drink !== undefined && dessert !== undefined) {
    button.disabled = false;
    button.innerHTML = "Fechar pedido";
    button.classList.add("check");
  } else {
    button.disabled = true;
  }
}

function whatsappLink() {
  const clientName = prompt("What is your name? ");
  const clientAddress = prompt("What will the shipping address be?");
  const message = encodeURIComponent(`Olá, gostaria de fazer o pedido:
  - Prato: *${food}*
  - Bebida: *${drink}*
  - Sobremesa: *${dessert}*
  Total: *R$ ${totalPrice}*\n
  Nome: *${clientName}*
  Endereço: *${clientAddress}*`);
  window.open(`https://wa.me/5581999705626?text=${message}`);
}

function priceSum() {
  soma = Number(foodPrice) + Number(drinkPrice) + Number(dessertPrice);
  totalPrice = soma.toFixed(2).replace(".", ",");
}

buttonCheck();

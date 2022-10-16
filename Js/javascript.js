let food;
let foodPrice = 8;
let drink;
let drinkPrice = 0;
let dessert;
let dessertPrice = 0;
let totalPrice = foodPrice + drinkPrice + dessertPrice;

function foodClick(selected) {
  let foodsList = document.querySelectorAll(".food");
  for (let i = 0; i <= foodsList.length; i++) {
    //Activates only the I choose after deactivating all others.
    foodsList[i].classList.remove("active");
    selected.classList.add("active");
    // Saves the price and value of the selected card
    food = selected.querySelector(".card-texts h3").textContent;
    foodPrice = selected.querySelector(".card-texts .card-price").textContent;
    console.log(foodPrice, food);
    buttoncheck();
  }
}

function drinkClick(selected) {
  let drinksList = document.querySelectorAll(".drink");
  for (let i = 0; i <= drinksList.length; i++) {
    //Activates only the I choose after deactivating all others.
    drinksList[i].classList.remove("active");
    selected.classList.add("active");
    // Saves the price and value of the selected card
    drink = selected.querySelector(".card-texts h3").textContent;
    drinkPrice = selected.querySelector(".card-texts .card-price").textContent;
    console.log(drinkPrice, drink);
    buttoncheck();
  }
}

function dessertClick(selected) {
  let dessertsList = document.querySelectorAll(".dessert");
  for (let i = 0; i <= dessertsList.length; i++) {
    //Activates only the I choose after deactivating all others.
    dessertsList[i].classList.remove("active");
    selected.classList.add("active");
    // Saves the price and value of the selected card
    dessert = selected.querySelector(".card-texts h3").textContent;
    dessertPrice = selected.querySelector(".card-texts .card-price").textContent;
    console.log(dessertPrice, dessert);
    buttoncheck();
  }
}

function buttoncheck() {
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
  const mensage = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n
  - Prato: ${food}\n
  - Bebida: ${drink}\n
  - Sobremesa: ${dessert}\n
  Total: R$ ${totalPrice}`);
  window.open(`https://wa.me/5581999705626?text=${mensage}`, "_blank");
}
buttoncheck();

const cards = document.querySelectorAll(".card");
const icons = document.querySelectorAll(".hide");
const foodsList = document.querySelectorAll(".food");
const drinksList = document.querySelectorAll(".drink");
const dessertsList = document.querySelectorAll(".desert");
let contador = 0;

console.log(foodsList);

let food;
let foodPrice = 0;
let drink;
let drinkPrice = 0;
let dessert;
let dessertPrice = 0;
let totalPrice = foodPrice + drinkPrice + dessertPrice;

for (let i = 0; i <= drinksList.length; i++) {
  drinksList[i].addEventListener("click", function () {
      drinksList[i].classList.toggle("active");
      icons[i].classList.toggle("hide");
     drinkPrice = drinksList[i].querySelector(".card-texts .card-price").textContent;
      drink = drinksList[i].querySelector(".card-texts h3").textContent;
      console.log(drink, drinkPrice);
  });
}

for (let i = 0; i <= foodsList.length; i++) {
  foodsList[i].addEventListener("click", function () {
      foodsList[i].classList.toggle("active");
      icons[i].classList.toggle("hide");
      foodPrice = foodsList[i].querySelector(".card-texts .card-price").textContent;
      food = foodsList[i].querySelector(".card-texts h3").textContent;
      console.log(food, foodPrice);
  });
}



/*Fim click event */
function buttoncheck() {
  const button = document.getElementById(button);
  if (food !== undefined && drink !== undefined && dessert !== undefined) {
    button.innerHTML = "Fechar pedido";
    button.classList.add(".button-active");
  } else if (food === undefined && drink === undefined && dessert === undefined) {
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

function removeActive() {
  for (let i = 0; i >= 5; i++) {
    if (foodsList[i].classList.contains("active")) {
      foodsList[i].classList.toggle("active");
      icons[i].classList.toggle("hide");
    }
  }
}

buttoncheck();

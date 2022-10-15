
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", function () {
      card.classList.toggle("active");
      let valorUm = card.querySelector(".card-texts .card-price").textContent
      let nomeUm = card.querySelector(".card-texts h3").textContent
      console.log(icons)
  });
});


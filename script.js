let balanceItems = document.querySelectorAll(".table__balance");
let hackItems = document.querySelectorAll(".table__hack");

function getRandomValue(min, max) {
  balanceItems.forEach((item) => {
    item.textContent = Math.floor(Math.random() * 999) + 1 + "%";
  });

  hackItems.forEach((item) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    item.textContent = Math.floor(Math.random() * (max - min + 1)) + min + "%";
  });
}

getRandomValue(1, 3);

class Product {
  constructor(name, description, img, price) {
    this.name = name;
    this.description = description;
    this.img = img;
    this.price = price;
  }
}

function renderProducts(container, products) {
  products.forEach((product) => {
    let productElement = document.createElement("div");
    productElement.innerHTML = `
          <div class="eat-set">
            <img src="./img/${product.img}" class="photo" />
            <div>${product.name}</div>
            <div>${product.description}</div>
            <div>${product.price}₽</div>
          </div>`;
    container.appendChild(productElement);
  });
}

let sets = [
  new Product("Сет1", "Афигенный сет", "set1.jpg", 1200),
  new Product("Сет2", "Вкусный сет", "set2.jpg", 1300),
  new Product("Сет3", "Классный сет", "set3.jpg", 1400),
];
let setsElement = document.getElementById("sets");

renderProducts(setsElement, sets);

let classic = [
  new Product("Ролл1", "Афигенный сет", "set1.jpg", 400),
  new Product("Ролл2", "Вкусный сет", "set2.jpg", 500),
  new Product("Ролл3", "Классный сет", "set3.jpg", 600),
];
let classicElement = document.getElementById("classic");

renderProducts(classicElement, classic);

let hot = [
  new Product("Ролл1", "Афигенный сет", "set1.jpg", 400),
  new Product("Ролл2", "Вкусный сет", "set2.jpg", 500),
  new Product("Ролл3", "Классный сет", "set3.jpg", 600),
];
let hotElement = document.getElementById("hot");

renderProducts(hotElement, hot);

let salad = [
  new Product("Ролл1", "Афигенный сет", "set1.jpg", 400),
  new Product("Ролл2", "Вкусный сет", "set2.jpg", 500),
  new Product("Ролл3", "Классный сет", "set3.jpg", 600),
];
let saladElement = document.getElementById("salad");

renderProducts(saladElement, salad);

let drink = [
  new Product("Ролл1", "Афигенный сет", "set1.jpg", 400),
  new Product("Ролл2", "Вкусный сет", "set2.jpg", 500),
  new Product("Ролл3", "Классный сет", "set3.jpg", 600),
];
let drinkElement = document.getElementById("drink");

renderProducts(drinkElement, drink);

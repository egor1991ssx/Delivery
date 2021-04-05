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
            <button onclick="window.open('https://vk.com/egrsafronov')" class="order-btn">Заказать</button>

          </div>`;
    container.appendChild(productElement);
  });
}

let news = [
  new Product("Сет1", "Афигенный сет", "set1.jpg", 1200),
  new Product("Сет1", "Афигенный сет", "set1.jpg", 1200),
  new Product("Сет1", "Афигенный сет", "set1.jpg", 1200),
  new Product("Сет1", "Афигенный сет", "set1.jpg", 1200),
  new Product("Сет2", "Вкусный сет", "set2.jpg", 1300),
  new Product("Сет3", "Классный сет", "set3.jpg", 1400),
];
let newsElement = document.getElementById("news");

renderProducts(newsElement, news);

let sets = [
  new Product("Сет1", "Афигенный сет", "set1.jpg", 1200),
  new Product("Сет2", "Вкусный сет", "set2.jpg", 1300),
  new Product("Сет3", "Классный сет", "set3.jpg", 1400),
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
  new Product("Сет1", "Афигенный сет", "set1.jpg", 1200),
  new Product("Сет2", "Вкусный сет", "set2.jpg", 1300),
  new Product("Сет3", "Классный сет", "set3.jpg", 1400),
];
let classicElement = document.getElementById("classic");

renderProducts(classicElement, classic);

let hot = [
  new Product("Ролл1", "Афигенный сет", "set1.jpg", 400),
  new Product("Ролл2", "Вкусный сет", "set2.jpg", 500),
  new Product("Ролл3", "Классный сет", "set3.jpg", 600),
  new Product("Сет1", "Афигенный сет", "set1.jpg", 1200),
  new Product("Сет2", "Вкусный сет", "set2.jpg", 1300),
  new Product("Сет3", "Классный сет", "set3.jpg", 1400),
];
let hotElement = document.getElementById("hot");

renderProducts(hotElement, hot);

let baked = [
  new Product("Сет1", "Афигенный сет", "set1.jpg", 1200),
  new Product("Сет2", "Вкусный сет", "set2.jpg", 1300),
  new Product("Сет3", "Классный сет", "set3.jpg", 1400),
  new Product("Сет1", "Афигенный сет", "set1.jpg", 1200),
  new Product("Сет2", "Вкусный сет", "set2.jpg", 1300),
  new Product("Сет3", "Классный сет", "set3.jpg", 1400),
];
let bakedElement = document.getElementById("baked");

renderProducts(bakedElement, baked);

let sushi = [
  new Product("Ролл1", "Афигенный сет", "set1.jpg", 400),
  new Product("Ролл2", "Вкусный сет", "set2.jpg", 500),
  new Product("Ролл3", "Классный сет", "set3.jpg", 600),
  new Product("Сет1", "Афигенный сет", "set1.jpg", 1200),
  new Product("Сет2", "Вкусный сет", "set2.jpg", 1300),
  new Product("Сет3", "Классный сет", "set3.jpg", 1400),
];
let sushiElement = document.getElementById("sushi");

renderProducts(sushiElement, sushi);

let wok = [
  new Product("Ролл1", "Афигенный сет", "set1.jpg", 400),
  new Product("Ролл2", "Вкусный сет", "set2.jpg", 500),
  new Product("Ролл3", "Классный сет", "set3.jpg", 600),
  new Product("Сет1", "Афигенный сет", "set1.jpg", 1200),
  new Product("Сет2", "Вкусный сет", "set2.jpg", 1300),
  new Product("Сет3", "Классный сет", "set3.jpg", 1400),
];
let wokElement = document.getElementById("wok");

renderProducts(wokElement, wok);

let salad = [
  new Product("Ролл1", "Афигенный сет", "set1.jpg", 400),
  new Product("Ролл2", "Вкусный сет", "set2.jpg", 500),
  new Product("Ролл3", "Классный сет", "set3.jpg", 600),
  new Product("Сет1", "Афигенный сет", "set1.jpg", 1200),
  new Product("Сет2", "Вкусный сет", "set2.jpg", 1300),
  new Product("Сет3", "Классный сет", "set3.jpg", 1400),
];
let saladElement = document.getElementById("salad");

renderProducts(saladElement, salad);

let drink = [
  new Product("Ролл1", "Афигенный сет", "set1.jpg", 400),
  new Product("Ролл2", "Вкусный сет", "set2.jpg", 500),
  new Product("Ролл3", "Классный сет", "set3.jpg", 600),
  new Product("Сет1", "Афигенный сет", "set1.jpg", 1200),
  new Product("Сет2", "Вкусный сет", "set2.jpg", 1300),
  new Product("Сет3", "Классный сет", "set3.jpg", 1400),
];
let drinkElement = document.getElementById("drink");

renderProducts(drinkElement, drink);

setTimeout(function () {
  document.body.classList.add("body_visible");
}, 200);

var $page = $("html, body");
$('a[data-href*="#"]').click(function () {
  const menu = $(`#menu`)[0];
  const menuHeight = menu.offsetHeight;
  $page.animate(
    {
      scrollTop: $($.attr(this, "data-href")).offset().top - menuHeight - 120,
    },
    400
  );
  return false;
});

function auth() {
  alert(`Проводится проверка...`);
  document.getElementById(`enter-form`).remove();
}

function showEnterForm() {
  const enterForm = document.createElement(`form`);
  enterForm.id = `enter-form`;
  enterForm.innerHTML = `<input type="Text">
  <br/>
  Пароль: <input type="password">
  <br/>
  <button id="submit">Войти</button>`;
  document.getElementsByTagName(`body`)[0].appendChild(enterForm);
  document.getElementById(`submit`).addEventListener(`click`, auth);
}

document.addEventListener(`DOMContentLoader`, () => {
  document.getElementById(`enter-btn`).addEventListener(`click`, showEnterForm);
});

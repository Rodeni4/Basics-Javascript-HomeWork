// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
let super_link_DOM = document.getElementById('super_link');
console.log(super_link_DOM);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
let card_link_DOM = document.getElementsByClassName('card-link');

for (let i = 0; i < card_link_DOM.length; i++) {
    card_link_DOM[i].textContent = 'ссылка';
}

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
let card_body_DOM = document.querySelector('.card-body');
let body_link_DOM = card_body_DOM.querySelector('.card-link');
console.log(body_link_DOM);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
let elementPage = document.querySelector('[data-number="50"]');
console.log(elementPage);

// 5. Выведите содержимое тега title в консоль.
console.log(document.title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
let card_title_DOM = document.querySelector('.card-title');
console.log(card_title_DOM.parentElement);

// 7. Создайте тег 'p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
let elementP = document.createElement('p');
elementP.textContent = 'Привет';
let elementCard = document.querySelector('.card');
elementCard.prepend(elementP);

// 8. Удалите тег h6 на странице.
document.querySelector('h6').remove();
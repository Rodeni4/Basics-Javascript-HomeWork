/* Домашнее задание

1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); */

// Задание 1
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// Задание 2
const createCounter = () => {
    let count = 0;
    function increment() {
        return ++count;
    };
    function decrement() {
        return --count;
    };
    return {
        increment, decrement
    };
};
const Counter1 = createCounter();
Counter1.increment();
Counter1.increment();
console.log(Counter1.increment()); // 3

const Counter2 = createCounter();
Counter2.decrement();
console.log(Counter2.decrement()); // -2

// Задание 3
// Подготвка
const body = document.querySelector('body');
const divRoot = document.createElement('div');
divRoot.setAttribute('id', 'root');
body.prepend(divRoot);

const divOne = document.createElement("div");
divOne.setAttribute('class', "one-class");
divOne.textContent = 'Первый элемент';
divRoot.appendChild(divOne);

const divTwo = document.createElement("div");
divTwo.setAttribute('class', "my-class");
divTwo.textContent = 'Второй элемент';
divRoot.appendChild(divTwo);

const divThree = document.createElement("div");
divThree.setAttribute('class', "my-class");
divThree.textContent = 'Третий элемент';
divRoot.appendChild(divThree);

// Решение
const findElementByClass = (rootElement, className) => {
    while (rootElement !== document.body) {
        return rootElement.getElementsByClassName(className)[0];
    };
};

// Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);

// Задание 1
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(i + ' - это ноль');
    } else {
        console.log((i % 2 === 0) ? i + ' - четное число'
            : i + ' - нечетное число');
    }
}

// Задание 2
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// Задание 3

const array = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
console.log(array);

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
console.log(`сумма элементов = ${sum}`);

let min = array[0];
for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
        min = array[i];
    }
}
console.log(`минимальное число = ${min}`);

let flag = false;
for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
        flag = true;
        break;
    }
}
console.log((flag === true) ? 'в массиве есть число 3'
    : 'в массиве нет числа 3');

// Задание 4
let star = '';
for (let i = 0; i < 20; i++) {
    star = star + '*';
    console.log(star);
}

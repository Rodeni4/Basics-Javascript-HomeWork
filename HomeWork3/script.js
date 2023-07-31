// Задание 1
function toCube(number) {
    alert(`${number} в кубе = ${number ** 3}`);
}

toCube(2);
toCube(3);

// Задание 2
let numberUser = prompt('Введите число');
function amountWages(number) {
    alert((isNaN(number)) ? 'Значение задано неверно'
        : `Размер заработной платы за вычетом налогов равен ${number - number * 0.13}`);

}

amountWages(numberUser);

// Задание 3
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
let num3 = prompt('Введите третье число');

function maxNum(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        alert(`максимальное значение = ${num1}`);
    } else if (num1 < num2 && num2 > num3) {
        alert(`максимальное значение = ${num2}`);
    } else {
        alert(`максимальное значение = ${num3}`);
    }
}

maxNum(num1, num2, num3);

// Задание 4
function sum(number1, number2) {
    return number1 + number2;
}

console.log(sum(2, 6));

function dif(number1, number2) {
    if (number1 === number2) {
        return 0;
    } else if (number1 > number2) {
        return number1 - number2;
    } else {
        return number2 - number1;
    }
}

console.log(dif(2, 6));

function multiply(number1, number2) {
    return number1 * number2;
}

console.log(multiply(4, 4));

function division(number1, number2) {
    return number1 / number2;
}

console.log(division(6, 2));


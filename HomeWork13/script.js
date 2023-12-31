/* Задание 1 ""Получение данных о пользователе""

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) 
в качестве аргумента и использует fetch для получения данных о пользователе 
с заданным ID с удаленного сервера. Функция должна возвращать промис, 
который разрешается с данными о пользователе в виде объекта. Если пользователь 
с указанным ID не найден, промис должен быть отклонен с соответствующим 
сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. 
Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() 
и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке. */

function getUserData(ID) {
    fetch(`https://jsonplaceholder.typicode.com/users/${ID}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            return new Error('Сервер вернул неверный статус');
        })
        .then((json) => { return json; })
        .catch((error) => { return error.message; })
}

getUserData(10);

/* Задание 2 ""Отправка данных на сервер""

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе 
в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер
 для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, 
 или отклоняется в случае ошибки. 

 saveUserData использует fetch для отправки данных о пользователе на удаленный сервер
 для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием
  типа содержимого application/json и сериализует объект с данными о пользователе
   в JSON-строку с помощью JSON.stringify(). 
   Если запрос успешен (с кодом 200), функция разрешает промис. 
   Если запрос неуспешен, функция отклоняет промис с сообщени */

function saveUserData(user) {
    fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: 'POST',
        header: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(user)
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            return new Error('Сервер вернул неверный статус');
        })
        .then(() => {
            return 'User data saved successfully';
        })
        .catch((error) => {
            return error.message;
        });
}

// Пример использования функции
const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user);

// Задание 3 ""Изменение стиля элемента через заданное время""

/* Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента
 и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить 
 стиль элемента через указанное время. */

function changeStyleDelayed(ID, time) {
    setTimeout(() => {
        const element = document.getElementById(ID);
        element.style.color = "red";
    }, time);
}

const body = document.querySelector('body');
const btn = document.createElement('button');
btn.setAttribute('id', 'myElement');
btn.setAttribute('style', 'color: green');
btn.textContent = 'Отправить';
body.prepend(btn);


// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"** 
// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
let inputFrom = document.querySelector('#from');
let textSpan = document.querySelector('span');
inputFrom.addEventListener('keyup', function (e) {
    textSpan.textContent = inputFrom.value;
});
/* 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'. */
let messageBtnEl = document.querySelector('.messageBtn');
let messageEl = document.querySelector('.message');
messageBtnEl.addEventListener('click', function (e) {
    messageEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
    messageEl.setAttribute('style', 'visibility:visible');
});

/* 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать. */
let form = document.querySelector('form');
let sendBtn = form.querySelector('button');
let inputEl = form.querySelector('input');
let selectEl = form.querySelector('select');
form.addEventListener('submit', function (e) {
    if (inputEl.value === '') {
        inputEl.classList.add('error');
        e.preventDefault();
    }
    if (selectEl.value === '') {
        selectEl.classList.add('error');
        e.preventDefault();
    }
});

inputEl.addEventListener('keyup', function (e) {
    if (inputEl.value === '') {
        inputEl.classList.add('error');
    }
    else {
        inputEl.classList.remove('error');
    }
});

selectEl.addEventListener('change', function (e) {
    if (selectEl.value === '') {
        selectEl.classList.add('error');
    }
    else {
        selectEl.classList.remove('error');
    }
});

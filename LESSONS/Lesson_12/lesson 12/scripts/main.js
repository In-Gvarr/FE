'use strict';

console.log('Hello, World!');

// Находим кнопку для прослушки клика
const btnClick = document.querySelector('.click-button');
//  Выводим кнопку в консоль
console.log(btnClick);

// Создаем функцию, которую хотим вызвать на событие
function handleBtnClick() {
    console.log('I was clicked!')
}

// Начинаем слушать событие клика по кнопке
btnClick.addEventListener("click", handleBtnClick);

// Создает искуственную задержку в выполнении кода
setTimeout(() => {
    // Перестаем слушать это событие
    btnClick.removeEventListener("click", handleBtnClick);
}, 5000)

// Задача: подписаться на события клика двух кнопок. При клике на одну из низ
// увеличиваем значение переменной на 1
// При клике на другую -- уменьщаем это значение

// Объявили переменную
let counter = 0;

// Нашли наши кнопки в документе
const btnPlus = document.querySelector('.btn--plus');
const btnMinus = document.querySelector('.btn--minus');

// Написали функцию увеличения на 1
function plusOne() {
    counter = counter + 1;
    console.log(counter);
}
// Написали функцию уменьшения на 1
function minusOne() {
    counter = counter - 1;
    console.log(counter);
}

// "Повесили прослушку" на найденные кнопки и задали необходимую функцию
btnPlus.addEventListener("click", plusOne);
btnMinus.addEventListener("click", minusOne);

// Задача: прослушать событие нажатия клавиатуры и вывести в параграф на странице

// Находим нужный параграф
const prg = document.getElementById("keyboard-text");

// Слушаем нажатие кнопки на клавиатуре целиком у всего документа
// и выводим это значение в параграф, склеивая с предыдущим
// document.addEventListener("keydown", (event) => {
//     prg.innerText = prg.innerText + event.key;
// });

// const article = document.querySelector('.article');
// setTimeout(() => {
//     article.classList.remove('red');
//     article.classList.add('green');
// }, 2000)

// Задача: найти карточки на странице. Для каждой карточки присвоить класс green,
// если этого класса у нее нет. Если класс уже есть, убрать его.

// Находим все карточки с указанным классом - querySelectorAll вернет нам массив
const cards = document.querySelectorAll('.article-with-number');
// Перебираем каждый элемент массива и вешаем на него "прослушку" события клик
cards.forEach(card => card.addEventListener('click', () => {
    // Если у элемента (карточки) есть класс - удаляем его
    if(card.classList.contains('green')) {
        card.classList.remove('green');
    } else {
        // иначе добавляем его
        card.classList.add('green');
    }
}))

// Пример использования свойства style - добавляет элементам inline-стили
const prgStyled = document.querySelector('#prg--styled');
prgStyled.style.color = "green";
prgStyled.style.fontSize = "32px"; //для написания правила, состоящего из 2 слов и более
// используем camelCase

// Задача: динамически с цикле создать блоки, которые меняют свой цвет 
// в зависимости от величины счетчика

function createCard(value) {
    // Создали элемент, div
    const newDiv = document.createElement("div");
    // стилизовали при помощи style
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.border = "1px solid black";
    // Добавили фоновый цвет с динамике, используя аргумент value, как значение BLUE (RGB)
    newDiv.style.backgroundColor = `rgb(128, 128, ${value})`;
    // Нашли узел, до которого хотим добавить эти карточки
    const title = document.querySelector('.cards-title');
    // Взяли родителя этого узла и добавили созданный блок до заголовка
    const parent = title.parentNode;
    parent.insertBefore(newDiv, title);
}

// создали переменную
let i = 0;
// в цикле, пока i меньше или равна 255
while(i <= 255) {
    // вызываем нашу функцию
    createCard(i);
    // увеличиваем счетчик
    i += 5;
}
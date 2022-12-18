'use strict';

console.log('Hello, World!');

// 1. Создание элемента div
// 2. Добавление разметки в созданный элемент
// 3. Добавление созданного элемента в конец выбранного узла (document.body)
// const div = document.createElement("div");
// div.innerHTML="<strong>Hello world!</strong>This is created div";
// document.body.append(div);

// 1. Создание элемента span
// 2. Добавление разметки в созданный элемент
// 3. Добавление созданного элемента в начало выбранного узла (document.body)
// const span = document.createElement("span");
// span.innerHTML="I am a span!";
// document.body.prepend(span);

// Добавление строки до элемента (узла)
// 1. Выбрали наш список на странице с помощью document.getElementById
// 2. Добавили строку перед выбранным списком
// const ol = document.getElementById('ol');

// ol.before("Строка до списка");

// Добавили строку после выбранного элемента (списка ol)
// ol.after("Строка после списка");

// Находим элемент (div) на странице
// const elementToDelete = document.querySelector('.text-block--to-delete');

// Удаляем элемент при помощи метода remove
// elementToDelete.remove();
// console.log(elementToDelete);

// Объявление функции на удаление элементов списка
// function clearList(items) {
//     // Находим все элементы, соответствующие условию (items), на странице
//     const elements = document.querySelectorAll(items);
//     // Проверили найденные элементы в консоли
//     console.log(elements);
//     // Перебираем полученный массив
//     for (let item of elements) {
//         // К каждому элементу применяем метод remove
//         item.remove();
//     }
// }

// // Вызов созданной функции
// clearList('li')


// Задача: получить ввод данных(список покупок) от пользователя 
// и добавить их в маркированный список
// в виде элементов
// Решение:
// Создаем список
// const ul = document.createElement('ul');
// // Добавляем список в элемент body
// document.body.append(ul);
// // Входим в бесконечный цикл
// while(true) {
//     // Вводим данные (строка для элемента списка)
//     let listItemContent = prompt("Введите, что вы хотите купить в магазине", "");
//     // обратываем условие выхода из цикла - если пользователь ввел пустую строку,
//     // цикл завершается
//     if(!listItemContent) {
//         break;
//     }
//     // создаем элемент списка (тег li)
//     let li = document.createElement('li');
//     // добавили введную строку в созданный элемент
//     li.innerHTML = listItemContent;
//     // добавили созданный элемент в конец списка
//     ul.append(li);
// }

// КОЛБЭКИ, Примеры

// 1. Создаем стрелочные функции, чтобы проверить порядок отработки в консоли
const first = () => {
    console.log(1);
}

const second = () => {
    console.log(2);
}

// 2. Вызвали эти функции, вывели значения в консоль
// first();
// second();

// 3. Симулируем асихнронную работу функции при помощи setTimeout
const third = () => {
    setTimeout(() => {
        console.log(3);
    }, 1000) // 1000 - это миллисекунды, через которые у нас выведется информация (1000 мс = 1с)
}

const four = () => {
    console.log(4);
}

// 4. Вызвали созданные функции и увидели асинхронность
// third();
// four();

// Создадим функцию вывода задач в консоль
const showTasks = (task, callback) => {
    // Вывели задачу в консоль
    console.log(`Сегодня нужно сделать эту задачу: ${task}`);
    // Вызвали колбэк функцию (любую, какую мы передали в качестве аргумента)
    callback();
}

// Создали функцию итогов дня
const daySummary = () => {
    console.log('День был очень насыщенный!');
}

// Создали функцию итогов выходного дня
const weekendSummary = () => {
    console.log('Выходной был просто супер!');
}

// Два раза вызываем наши задачи на день с РАЗНЫМИ колбэками
showTasks('позвонить доктору', daySummary);
showTasks('сходить в зоопарк', weekendSummary);


// Задание: написать функцию, которая принимает себя в качестве первого аргумента массив,
// а в качестве второго -- функцию. Принятую функцию нужно вызвать 1 раз для каждого 
// элемента массива. 
const applyForEach = (arr, callback) => {
    // При помощи метода map мы перебираем массив и применяем нашу колбэк функцию
    // к каждому элементу. Метод "map" возращает в качестве результата нам 
    // новый массив (т.е. наши манипуляции не повлияют на исходные данные)
    const multupliedSalaries = arr.map((salary, index) => callback(salary));
    // Пока что выводим результаты перебора в консоль
    console.log(multupliedSalaries);
}

// Создаем стрелочную функцию, которая принимает в себя 1 значение (аргумент)
// и возвращает нам это значение, умноженное на 4
const multiplyByFour = (value) => {
    console.log(value*4);
    return value*4;
}

// Создаем массив зарплат
const salaries = [1000, 2000, 3000, 4000];

// Вызываем нашу функцию, передаем в нее созданный массив и ссылку на функцию умножения
applyForEach(salaries, multiplyByFour);
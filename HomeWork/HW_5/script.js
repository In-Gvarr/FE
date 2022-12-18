
//создали массив, куда зададим картинки
const arrImages =[];
//в массив добавили картинки
arrImages.push('https://cs12.pikabu.ru/post_img/big/2022/08/09/7/1660042588198544626.png');
arrImages.push('https://cs14.pikabu.ru/post_img/big/2022/08/09/7/1660042650157930527.png');
arrImages.push('https://cs12.pikabu.ru/post_img/big/2022/08/09/7/1660043738169467291.png');
arrImages.push('https://cs14.pikabu.ru/post_img/big/2022/08/09/7/1660043789125172136.png');
arrImages.push('https://cs14.pikabu.ru/post_img/big/2022/08/09/7/1660043542189487065.png');
//находим в документы картины, которые добавили в массив
const cards = document.querySelectorAll('.window');
//добавляем адреса картин к тегам img (в html файл)
for(let i=0; i < cards; i++){
    cards[i].setAttribute('src',arrImages[i]);
};
//создаем переменную с адресом большой картины
const bigImage = document.querySelector('#big');
bigImage.setAttribute('src', arrImages[4]);
//функция передает новый адрес для большой картины
function show (newUrl) {
    bigImage.setAttribute('src', newUrl);
}
//слушаем нажатие картинки
cards.forEach(card => card.addEventListener('mousedown', () => {
    let button = card.getAttribute('src');
}));



//создали элемент Div
const div = document.createElement("div");
//стилизовали при  помощи style
div.style.width = "300px";
div.style.height = "300px";
div.style.border = "1px solid black";
//добавили фоновый цвет в динамике, используя аргумент value
div.style.backgroundColor = "green";
div.style.textAlign = "center";
div.innerHTML="This is created div";
document.body.append(div);
// Изменить цвет при наведении красный
div.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "red"
})
// Изменить обратно на зеленый
div.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "green"
})





//создаем список дел
const ol = document.createElement('ol');
//добавляем список в элемент body
document.body.append(ol);
//входим в бесконечный цикл
while(true){
//вводим данные (строка элемента списка)
let listItemContent = prompt("Введите, что вы хотите сегодня сделать", "");
//обрабатываем условие выхода из цикла - если пользователь ввел пустую строку, цикл завершается
if(listItemContent==""){
    break;
}
//создаем элемент списка (тег li)
let li = document.createElement('li');
//добавляем введенную строку в созданный элемент
li.innerHTML=listItemContent;
//добавляем созданный элемент в конец списка
ol.append(li);
}
// Изменить цвет при клике на красный
ol.addEventListener("mousedown", (event) => {
    event.target.style.backgroundColor = "red";
    event.target.style.width = "300px";
})
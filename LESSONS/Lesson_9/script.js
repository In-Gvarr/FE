// let user1 = {
//     name: "John",
//     age: 30,
//     isAdmin: true,
//     "likes car": true    
// };

// user1["likes car"] = false;
// user1.isMarried = false;

// delete user1.isAdmin;
// delete user1["likes car"];

// console.log(user1.name);
// console.log(user1.age);

// console.log(user1);

// for(let key in user1){
//     console.log(key);
//     console.log(user1[key]);
// }

// let codes  = {
//     "+49": "Germany",
//     "+48": "Poland",
//     "+44": "Great Britan",
//     "+1": "USA"
// };
// for(let code in codes){
//     console.log(Number(code));
// }

// let user = {};
//     user.name = "John",
//     user.surname = "Smith",
//     user.name = "Pete"
//     delete user.name;

//     console.log(user.name);
//     console.log(user.surname);

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }
// let sum = 0;
// for(let key in salaries){
//     sum += salaries[key];
// }
// console.log(sum);
// let userName = 'John';

// function showMessage(){
//     let name = 'Anna';
//     console.log(userName);
// }

// console.log(userName);

// showMessage();
// showMessage();

function showMessage(from, text){
    console.log(from + " " + text);
}
showMessage('John', 'Hello!');
showMessage('Lily', 'how are you?');
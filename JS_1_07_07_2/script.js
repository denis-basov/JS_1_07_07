/*
let age = 20;

if (age < 18) {
    console.log('Еще очень рано');
} else if (age < 21) {
    console.log('Еще рано');
} else {
    console.log('Добро пожаловать');
}*/


/*
// проверка значений
// typeof - проверка типа данных значения
let age = 13;

// если тип значения НЕ число, вывести ошибку
if(typeof age !== 'number'){
    console.log('Возраст должен быть числом');
}else{// если число, то проверяем
    if (age < 18) {
        console.log('Еще очень рано');
    } else if (age < 21) {
        console.log('Еще рано');
    } else {
        console.log('Добро пожаловать');
    }
}
*/

/*
let age = 18;
if(age < 18){
    console.log('Вход запрещен');
}else{
    console.log('Добро пожаловать');
}
*/

/*
// тернарный оператор
let age = 3;

age < 18 ? console.log('Вход запрещен') : console.log('Добро пожаловать');
*/

/*
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}*/

/*
let rating = 3;
switch(rating){
    case 3:
        console.log('Отличный рейтинг');
        break;
    case 2: 
        console.log('Удовлетворительный рейтинг');
        break;
    case 1: 
        console.log('Ужасный рейтинг');
        break;    
    default:
        console.log('Рейтинг указан некорректно');               
}*/

/*
// вывести числа от 1 до 5
let num = 1;
while(num <= 5){// пока в скобках истина, цикл продолжается
    console.log(num);
    num = num + 1;// увеличиваем на 1
    // num += 1;
    // num++;
}*/

/*
let num = 10;
while(num >= 0){// пока в скобках истина, цикл продолжается
    console.log(num);
    num--;// вычитаем 1
}*/

/*
for(let num = 1; num <= 5; num++){
    console.log(num);
}*/

/*
for(let num = 20; num >= 0; num -= 2){
    console.log(num);
}*/

/*
// break - прерывание цикла
for(let num = 10; num >= 0; num--){
    console.log(num);

    if(num === 5){
        break;
    }
}*/

/*
// continue - переход к следующей итерации цикла
for(let num = 10; num >= 0; num--){

    if(num % 2 === 1){// выводим только четные числа
        continue;
    }
    console.log(num);
}*/

/*
// получить сумму чисел от 1 до 5
let sum = 0;

for(let num = 1; num <= 5; num++){
    sum = sum + num;
}
console.log(sum);*/

/*
// получить сумму чисел от 1 до 500
let sum = 0;

for(let num = 1; num <= 500; num++){
    sum = sum + num;
}
console.log(sum);*/

/*
let numbers = [4, 6, 8, 9, 3, 5, 7];
let users = ['Иван', 'Ирина', 'Анна', 'Сергей', 'Петр'];

console.log(numbers);
console.log(users);

// console.log(numbers.length);// кол-во элементов
// console.log(users.length);// кол-во элементов

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);


for(let i = 0; i < users.length; i++){
    console.log(i);
    console.log(users[i]);
}
*/

/*
let numbers = [4, 6, 8, 9, 3, 5, 7];
let users = ['Иван', 'Ирина', 'Анна', 'Сергей', 'Петр'];

for(let num of numbers){
    console.log(num);
}

for(let user of users){
    console.log(user);
}*/

/*
let numbers = [4, 6, 8, 9, 3, 5, 7];
let users = ['Иван', 'Ирина', 'Анна', 'Сергей', 'Петр'];

// получить сумму элементов массива
let sum = 0;
for(let num of numbers){
    sum += num;
    //sum = sum + num;
}
// 1. sum:0 num:4
// 2. sum:4 num:6
// 3. sum:10 num:8
// 4. sum:18 num:9
console.log(sum);*/

/*
// вывести элементы массива в документ в виде заголовков 2 уровня (h2)
let users = ['Иван', 'Ирина', 'Анна', 'Сергей', 'Петр'];

for(let user of users){
    //console.log(user);
    //document.write('<h2>' + user + '</h2>');
    document.write(`<h2>${user}</h2>`);
}
//document.write(users[0]);*/

/*
// получить из массива строку
let users = ['Иван', 'Ирина', 'Анна', 'Сергей', 'Петр'];

let usersStr = '';
for(let user of users){
    usersStr = `${usersStr}, ${user}`;
}
console.log(usersStr);*/

// let users = ['Иван', 'Ирина', 'Анна', 'Сергей', 'Петр'];
// console.log(users.join(', '));
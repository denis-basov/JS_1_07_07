//console.log('hello');

//getElementById()

/*
// 1. определение функции
function printGreeting(){
    console.log('Hello, user');
}

// 2. вызов функции
printGreeting();
printGreeting();
printGreeting();*/


/*
// userName - параметр
function printGreeting(userName){
    console.log(`Привет, ${userName}!`);
}

// 'Иван' - аргумент
printGreeting('Иван');
printGreeting('Светлана');
*/

/*
// написать функцию, которая получает сумму элементов массива
let nums1 = [3,5,7,2,5,8,9,45];
let nums2 = [7,3,4,7,9,5];

function sumArray(arr){
    let sum = 0;
    for(let element of arr){
        sum += element;
    }
    console.log(sum);
}

sumArray(nums1);
sumArray(nums2);*/

/*
function sayHello(userName){
    console.log(`Привет, ${userName}`);
}

sayHello('Павел');
sayHello();*/

/*
function getSum(num1, num2){
    let sum = num1 + num2;
    console.log(sum);
}

getSum();// num1 + num2 // undef + undef
getSum(4);
getSum(4, 4);*/

/*
// если имя не передано, вывести общую фразу
function sayHello(userName = 'пользователь'){
    console.log(`Привет, ${userName}!`);
}

sayHello('Павел');
sayHello();*/

/*
function getSum(num1 = 0, num2 = 0){
    let sum = num1 + num2;
    console.log(sum);
}

getSum();
getSum(4);
getSum(4, 4);*/

/*
// получить сумму чисел
function getSum(num1, num2){
    let sum = num1 + num2;
    return sum;
}

let mySum = getSum(3, 5);
console.log(mySum);

// функция для умножения
function getMult(sum, num){
    console.log(sum * num);
}

getMult(mySum, 3);
*/

/*
function getSum(num1, num2){
    let sum = num1 + num2;
    console.log(sum);
    return sum;

    console.log(sum);
}

getSum(6, 8);*/


/*
let users = ['Ivan', 'Sergey', 'Anna'];
// написать функцию, которая оборачивает элементы массива в параграфы
// и возвращает новый массив

function addPar(arr){
    let result = [];

    for(let value of arr){
        //console.log(`<p>${value}</p>`);
        result.push(`<p>${value}</p>`);
    }

    //console.log(result);
    return result;
}

let usersPar = addPar(users);

document.write(usersPar.join(''));*/

/*
let users = ['Ivan', 'Sergey', 'Anna'];

function addPar(arr, tag){
    let result = [];

    for(let value of arr){
        //result.push(`<h2>Ivan</h2>`);
        result.push(`<${tag}>${value}</${tag}>`);
    }

    //return {arr: result, tag: tag};
    return [result, tag];
}


let usersPar = addPar(users, 'h3');
console.log(usersPar);

document.write(usersPar[0].join(''));
console.log(usersPar[1]);*/

/*
let message = 'Hello, User';

console.log( message.toLowerCase() );*/


// поменять текст и цвет заголовка h1 на странице
//console.log(document);
//console.dir(document);

/*
// 1 получение элемента со страницы
let head1 = document.querySelector('h1');
//console.dir(head1);
//console.log(head1.textContent);

function textEdit(newText){
    head1.textContent = newText;// 2 изменение текста
}
textEdit('Я программирую на JavaScript');

function colorEdit(newColor, newBackground){
    head1.style.color = newColor;// 3 изменение цвета текста
    head1.style.background = newBackground;// 4 изменение цвета фона
}

colorEdit('blue', 'orange');*/

/*
// при клике на заголовок изменить его текст, цвет текста и фона
let head1 = document.querySelector('h1');

head1.addEventListener('click', function(){
    head1.textContent = 'Я программирую на JavaScript';
    head1.style.color = 'blue';
    head1.style.background = 'orange';
});*/


/*
// при клике на заголовок изменить его текст, цвет текста и фона
let head1 = document.querySelector('h1');

// функциональное выражение
let editHeader = function(){
    head1.textContent = 'Я программирую на JavaScript';
    head1.style.color = 'blue';
    head1.style.background = 'orange';
}

// определение функции
// function editHeader(){
//     head1.textContent = 'Я программирую на JavaScript';
//     head1.style.color = 'blue';
//     head1.style.background = 'orange';
// }

head1.addEventListener('click', editHeader);*/
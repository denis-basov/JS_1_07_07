//getData();


// try{
//     getData();
// }catch(error){
//     //console.dir(error);
//     // инф на почту, телефон, запись в бд....
// }

/**
 * рег выражения
 */
//let fName = 'ivan';
// console.log(fName.toUpperCase());

/*
// match
let message = 'Java Я программирую на Java';
let result = message.match(/Java/g);
console.log(result);*/

/*
// replace
let message = 'Java Я программирую на java';
let result = message.replace(/Java/gi, 'JavaScript');

console.log(result);*/

// test
/*
let message = 'Привет, Вася';
let regExp = /^[a-zа-яА-Я0-9, -]+$/;

let result = regExp.test(message);

if(result){
    console.log('Строка соответствует рег выражению');
}else{
    console.log('Строка НЕ соответствует рег выражению');
}*/

/*
let message = 'Santa123';
let regExp = /^[a-zа-яё][a-z0-9а-яё]{2,}$/i;

let result = regExp.test(message);

if(result){
    console.log('Строка соответствует рег выражению');
}else{
    console.log('Строка НЕ соответствует рег выражению');
}*/

/*
let dateTime = '2024-07-21 12:05:45';

let dateTimeArr = dateTime.split(' ');
console.log(`${dateTimeArr[1]} ${dateTimeArr[0]}`);*/

/*
let fName = 'IvAn'; // Ivan
// разделить на массив
// первый элемент привести к верхнему регистру
// остальные к нижнему
// объединить массив в строку*/


/**
 * JSON + REST API
 */

/*
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));*/

/*
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));*/


// fetch('https://restcountries.com/v3.1/all')
//     .then((response) => response.json())
//     .then((json) => console.log(json));    


// асинхронный запрос
let getCountryInfo = async function(country){
    let response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    let data = await response.json();
    data = data[0];
    console.log(data);

    let output = `
        <div class="country">
            <h2>${data.altSpellings[1]}</h2>
            <p>Площадь: ${data.area} км/кв</p>
            <img src="${data.coatOfArms.svg}" width="200" alt="Герб страны ${data.altSpellings[1]}">
        </div>
    `;

    document.write(output);
}

getCountryInfo('peru');

console.log('hello');
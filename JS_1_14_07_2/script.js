// let head1 = document.querySelector('h1');
// console.log(head1);

// console.log([1,2,3]);
// console.log(['a', 'b']);

// console.log(typeof null);


// let firstName = 'Ivan';
// let lastName = 'Ivanov';
// let age = 22;
// let hobby = 'Reading';

// let user = ['Ivan', 'Ivanov', 22, 'Reading'];

/*
let head1 = document.querySelector('h1');
let user = {
    firstName: 'Ivan',
    lastName:'Ivanov',
    age: 22,
    hobby: 'Reading'
};

// console.log(user);
// console.log(user.firstName);

let greet = `Hello, ${user.firstName} ${user.lastName}!`;
head1.textContent = greet;*/

// let nums = [1,2,3];
// console.log(nums);
// console.log(nums.length);

// let message = 'hello, summer';
// console.log(message.length);

/*
console.log( Math );
console.log( Math.max(3,7,9,1) );
console.log( Math.PI );*/

/*
let car = {
    model: 'Ваз',
    color: 'Синий',
    "part number": 135653
}

let carInfo = `
    <div clas="car-info">
        <p>Модель: ${car.model}</p>
        <p>Цвет кузова: ${car.color}</p>
        <p>Номер партии: ${car["part number"]}</p>
    </div>
`;
//console.log(carInfo);
let carContainer = document.querySelector('#car-info');// получаем элемент
carContainer.innerHTML = carInfo;*/

/*
let car = {
    model: 'Ваз',
    color: 'Синий',
    "part number": 135653
}

car.color = 'Красный';

car.madeYear = 2012;
console.log(car);*/

/*
let user = {
    fName: 'Иван',
    lName: 'Петров',
    hobbies: ['Есть', 'Спать', 'Гулять'],
    address: {
        country: 'Россия',
        city: 'СПБ',
        street: 'Ломоносова',
    }
}

// console.log(user.hobbies[1]);
// console.log(user.address.street);

console.log(user.hobbies.join(', '));*/

/*
// массив объектов
let users = [
    {
        fName: 'Иван',
        lName: 'Петров',
    },
    {
        fName: 'Анна',
        lName: 'Петрова',
    },
    {
        fName: 'Валентина',
        lName: 'Сидорова',
    },
    {
        fName: 'Петр',
        lName: 'Иванов',
    }
];

let usersContainer = document.querySelector('#users');

for(let user of users){
    // формируем разметку для вывода
    let userHTML = `
        <div class="user">
            <h2>Имя: ${user.fName}. Фамилия: ${user.lName}.</h2>
        </div>
    `;
    // выводим в документ
    usersContainer.innerHTML += userHTML;
}*/

/*
let car = {
    model: 'Ваз',
    color: 'Синий',
    partNumber: 135653,
    makeBeep: function(){
        console.log('Beep');
    }
}

console.log(car);
car.makeBeep();*/

/*
let car = {
    model: 'Ваз',
    color: 'Синий',
    partNumber: 135653,

    getCarInfo(){
        console.log(`Модель: ${this.model}, цвет кузова: ${this.color}`);
    }
}

car.getCarInfo();*/

/*
let sports = ["футбол", "бейсбол"];
sports.push('регби', 'формула 1');

let lastEl = sports.pop();
console.log(sports);
console.log(lastEl);*/

/*
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

let newAnimals = animals.slice(2, 4);
console.log(newAnimals);*/

/*
// копирование по ссылке
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let newAnimals = animals;

animals.pop();

console.log(newAnimals);
console.log(animals);*/

/*
// копирование по значению
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let newAnimals = animals.slice();
animals.pop();
console.log(newAnimals);*/

/*
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let deleteItems = animals.splice(2, 0, 'bear', 'tiger');
console.log(animals);
console.log(deleteItems);*/

/*
let scores = [1, 2, 10, 21];
scores.sort();
console.log(scores);

const animals = ['elephant', 'camel', 'ant', 'bison','duck'];
animals.sort();
console.log(animals);*/

/*
const animals = ['elephant', 'camel', 'ant', 'bison','duck'];

animals.forEach(function(value, index){
    //console.log(`Ключ: ${index} Значение: ${value}`);
    console.log(`<p class="animal-${index+1}">${value}</p>`);
});*/

/*
const animals = ['elephant', 'camel', 'ant', 'bison','duck'];
let newAnimals = animals.map(function(value, index){
    return `<p class="animal-${index+1}">${value}</p>`;
});

console.log(newAnimals);*/
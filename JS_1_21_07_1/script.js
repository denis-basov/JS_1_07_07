// let user = {
//     fName: 'Иван',
//     lname: 'Иванов'
// }
// console.log(user);

/*
// 1 конструктор создает пустой объект let book = {}
// 2 наполнение объекта свойствами
// 3 возврат готового объекта
let Books = function(titlePar, authorPar, pricePar){
    this.title = titlePar;
    this.author = authorPar;
    this.price = pricePar;
};

let book1 = new Books('Евгений Онегин', 'Пушкин', 33);
let book2 = new Books('Горе от ума', 'Грибоедов', 11);

console.log(book1);
console.log(book2);

let books = [book1, book2];
console.log(books);
*/

/*
// методы
let Books = function(titlePar, authorPar, pricePar){
    this.title = titlePar;
    this.author = authorPar;
    this.price = pricePar;

    // метод
    this.getInfo = function(){
        return `<h2>${this.title}, ${this.author}</h2>`;
    }
};

let book1 = new Books('Евгений Онегин', 'Пушкин', 33);
let book2 = new Books('Горе от ума', 'Грибоедов', 11);

console.log(book1.title);
console.log(book1.getInfo());

console.log(book1);
console.log(book2);
*/

/*
// метод в прототипе
let Books = function(titlePar, authorPar, pricePar){
    this.title = titlePar;
    this.author = authorPar;
    this.price = pricePar;
};

let book1 = new Books('Евгений Онегин', 'Пушкин', 33);
let book2 = new Books('Горе от ума', 'Грибоедов', 11);

//console.log(Books.prototype);

Books.prototype.getInfo = function(){
    return `<h2>${this.title}, ${this.author}</h2>`;
};

console.log(book1);
console.log(book2);
*/

/**
 * классы
 */
/*
class Books{
    // вызывается в момент создания объекта
    constructor(image, title, author, price){
        this.image = image;
        this.title = title;
        this.author = author;
        this.price = price;
    }

    // методы класса
    getTitle(){
        return this.title;
    }

    getInfo(){
        return `<h2>${this.title}, ${this.author}</h2>`;
    }

    // формирование и вывод разметки в документ
    printBookInfo(container){
        // формируем разметку с данными
        let output = `
            <div class="book">
                <h2>Название: ${this.title}</h2>
                <img src="${this.image}" alt="${this.title} - ${this.author}">
                <p>Автор: ${this.author}</p>
                <p>Цена: ${this.price} р.</p>
            </div>
        `;
        // console.log(output);

        // вставка разметки в контейнер
        container.insertAdjacentHTML('beforeend', output);
    }

}

let book1 = new Books('images/onegin.jpg', 'Евгений Онегин', 'Пушкин', 33);
let book2 = new Books('images/griboedov.jpg', 'Горе от ума', 'Грибоедов', 11);

console.log(book1);
console.log(book2);

// console.log(book1.getTitle());
// console.log(book2.getInfo());

// вставляем книгу 1
let booksContainer = document.querySelector('#books');// получаем элемент
book1.printBookInfo(booksContainer);

// вставляем книгу 2
let newBooksContainer = document.querySelector('#new-books');
book2.printBookInfo(newBooksContainer);
*/


/**
 * наследование
 */
// родительский класс
class Books{
    constructor(image, title, author, price){
        this.image = image;
        this.title = title;
        this.author = author;
        this.price = price;
    }

    getTitle(){
        return this.title;
    }

    getInfo(){
        return `<h2>${this.title}, ${this.author}</h2>`;
    }

    printBookInfo(container){
        let output = `
            <div class="book">
                <h2>Название: ${this.title}</h2>
                <img src="${this.image}" alt="${this.title} - ${this.author}">
                <p>Автор: ${this.author}</p>
                <p>Цена: ${this.price} р.</p>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', output);
    }
}

let book1 = new Books('images/onegin.jpg', 'Евгений Онегин', 'Пушкин', 33);
let book2 = new Books('images/griboedov.jpg', 'Горе от ума', 'Грибоедов', 11);
console.log(book1);

// дочерний класс печатных книг
class PrintBooks extends Books{
    // уникальные свойства: переплет, кол-во страниц
    constructor(image, title, author, price, pages, binding){
        super(image, title, author, price);   
        this.pages = pages;
        this.binding = binding;
    }
}
let printBook1 = new PrintBooks('images/tolstoy.jpg', 'Война и мир', 'Толстой', 55, 2000, 'Твердый');
console.log(printBook1);
// console.log(printBook1.getInfo());

// дочерний класс аудиокниг
class AudioBooks extends Books{
    // уникальное свойство время звучания
    constructor(image, title, author, price, playTime){
        super(image, title, author, price);
        this.playTime = playTime;   
    }

    printBookInfo(container){
        let output = `
            <div class="book">
                <h2>Название: ${this.title}</h2>
                <img src="${this.image}" alt="${this.title} - ${this.author}">
                <p>Автор: ${this.author}</p>
                <p>Цена: ${this.price} р.</p>
                <p>Время звучания: ${this.playTime}</p>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', output);
    }

}
let audioBook1 = new AudioBooks('images/tolstoy.jpg', 'Война и мир', 'Толстой', 55, '05:10:23:44');
console.log(audioBook1);
// console.log(audioBook1.getInfo());

let booksContainer = document.querySelector('#books');// получаем элемент
audioBook1.printBookInfo(booksContainer);
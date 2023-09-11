/*

Color Ghost
Create a class Ghost
Ghost objects are instantiated without any arguments.
Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

*/

/*

Цветной призрак
Создание класса Ghost
Объекты Ghost создаются без каких-либо аргументов.
При создании объектам-призракам присваивается случайный цветовой атрибут "белый", "желтый", "фиолетовый" или "красный"

*/

/*
ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

let Ghost = function () {
    // your code goes here
    // Самая короткая запись
    // Так как мы знаем количество цветов, то можно просто прописать "4"
    this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random() * 4)];
};

let Ghost2 = function () {
    // your code goes here
    // Если мы не знаем количество цветов в массиве
    let colors = ['white', 'yellow', 'purple', 'red'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
};
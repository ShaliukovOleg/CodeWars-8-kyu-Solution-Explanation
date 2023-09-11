/*

Functional closures can get overly attached. Set them straight!
Why doesn't greet_abe() actually greet Abe?

*/

/*

Функциональные замыкания могут стать чрезмерно "прикрепленными" (зависимыми). Настройте их правильно!
Почему функция greet_abe() на самом деле не приветствует Эйба?

*/

// Проблема заключается в одинаковом наименовании переменных. 
// Минимальные изменения, которые требуются это просто изменить название второй переменной name
var name = 'Abe';
var greet_abe = function () {
    return "Hello, " + name + '!';
};
name1 = 'Ben';
var greet_ben = function () {
    return "Hello, " + name1 + '!';
};

// Альтернативное решение через function declaration
// В данном решении 'name' будет иметь локальную область видимости (function scope) и 
// мы спокойно сможем сохранять значение локальной переменной до инициализации функции
var name;
function greet_abe() {
    name = 'Abe';
    return "Hello, " + name + '!';
};


function greet_ben() {
    name = 'Ben';
    return "Hello, " + name + '!';
};

// Если бы мы проводили тесты, или выводили в консоль значения по очереди, 
// как написано ниже, то мы бы получали бы оба привествия!

var name = 'Abe';
var greet_abe = function () {
    return "Hello, " + name + '!';
};
console.log(greet_abe()); // Hello, Abe!

name = 'Ben';
var greet_ben = function () {
    return "Hello, " + name + '!';
};
console.log(greet_ben()); // Hello, Ben!

// Самое короткое решение:
const greet_abe = () => 'Hello, Abe!';
const greet_ben = () => 'Hello, Ben!';


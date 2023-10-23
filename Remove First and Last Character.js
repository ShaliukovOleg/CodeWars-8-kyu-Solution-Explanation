// Solution / Решение

function removeChar(str) {
    //You got this!
    return [...str].splice(1, str.length - 2).join('');
};

// Short version (splice) - удаляем существующие элементы и/или добавляя новые.

const removeChar = str => [...str].splice(1, str.length - 2).join('');

// Or (substring) - возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.

const removeChar = str => str.substring(1, str.length - 1);

// Or (slice) - возвращает новый массив, содержащий копию части исходного массива.

const removeChar = str => str.slice(1, -1);

// Tests

console.log(removeChar('eloquent')); // loquen
console.log(removeChar('country')); // ountr
console.log(removeChar('person')); // erso
console.log(removeChar('place')); // lac
console.log(removeChar('ooopsss')); // oopss

/*

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters.

*/

/*

Все довольно просто. Ваша задача - создать функцию, удаляющую первый и последний символы строки. 
Вам дан один параметр - исходная строка. 
Не нужно беспокоиться о строках, содержащих менее двух символов.

*/
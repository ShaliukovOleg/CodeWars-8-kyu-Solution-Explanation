// Solution / Решение

function arr2bin(arr) {
    let total = 0; // Инициализация суммы
    for (let i = 0; i < arr.length; i++) { // Проход по элементам массива
        if (typeof arr[i] === 'number') { // Проверка, является ли элемент числом
            total += arr[i]; // Добавление числового значения к сумме
        }
    }
    return total > 0 ? total.toString(2) : '0'; // Возвращение двоичного эквивалента суммы
}

// Short version

function arr2bin(arr) {
    return arr.filter(e => typeof e === 'number').reduce((acc, num) => acc + num, 0).toString(2) || '0';
}

// Tests

console.log(arr2bin([1,2,3,4,5])); // 1111
console.log(arr2bin([1,10,100,1000])); // 10001010111
console.log(arr2bin([null])); // 0
console.log(arr2bin([true,true,false,15])); // 1111

/*

Given an array add all the number elements and return the binary equivalent of that sum; 
to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
This is a modification on the Kata: Array2Binary addition hope you like it

*/

/*

В заданном массиве сложить все числовые элементы и вернуть двоичный эквивалент этой суммы; 
Для того чтобы код был пуленепробиваемым, все, что не является числом, должно быть добавлено как 0, поскольку оно не может быть добавлено.

Если ваш язык может работать с двоичными числами с плавающей запятой, предположим, что массив не будет содержать плавающих или двойных чисел.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

ПРИМЕЧАНИЕ: NaN - это тоже число в javascript для десятичной, двоичной и n-ричной системы счисления.
Это модификация Kata: Array2Binary, надеюсь, она вам понравится

*/
// Solution / Решение

function between(a, b) {
    // your code here
    let result = [];
    for (let i = a; i <= b; i++) {
        result.push(i);
    }

    return result;
}

// Short version

const between = (a, b) => Array.from({length: b - a + 1}, (_, index) => a + index);

// Tests

console.log(between(-2, 2)); // [ -2, -1, 0, 1, 2 ]
console.log(between(5, 10)); // [ 5, 6, 7, 8, 9, 10 ]
console.log(between(-1, 5)); // [ -1, 0, 1, 2, 3, 4, 5 ]

/*

Complete the function that takes two integers (a, b, where a < b) 
and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

*/

/*

Выполните функцию, которая принимает два целых числа (a, b, где a < b) 
и возвращает массив всех целых чисел между входными параметрами, включая их.

Например:

a = 1
b = 4
--> [1, 2, 3, 4]

*/
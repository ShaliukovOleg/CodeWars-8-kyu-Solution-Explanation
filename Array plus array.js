// Solution / Решение

// Use spread
function arrayPlusArray(arr1, arr2) {
    return [...arr1, ...arr2].reduce((acc, elem) => acc + elem, 0);
}

// Use concat 
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b)
}

// Short version
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, elem) => acc + elem, 0);

// Tests
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); // -21
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])); // 15

/*

I'm new to coding and now I want to get the sum of two arrays... 
Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

*/

/*

Получить сумму обоих массивов переданных аргументами.

P.S. Каждый массив содержит только целые числа. Выходные данные тоже являются числами.

*/
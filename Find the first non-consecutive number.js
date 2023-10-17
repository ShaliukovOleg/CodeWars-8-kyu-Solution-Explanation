// Solution / Решение

function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) { // Проходим по элементам массива.
        if (arr[i] !== arr[i - 1] + 1) { // Сравниваем текущий элемент (arr[i]) с предыдущим элементом (arr[i - 1]) + 1.
            return arr[i]; // Возвращаем текущий элемент как первый непоследовательный элемент.
        }
    }
    return null; // Если ни один элемент не соответствует условию, возвращаем null.
}

// Short version / Короткая версия

function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) if (arr[i] !== arr[i - 1] + 1) return arr[i];
    return null;
}

// Tests

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // Выведет: 6
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6]));    // Выведет: null
console.log(firstNonConsecutive([]));                    // Выведет: null
console.log(firstNonConsecutive([5]));                   // Выведет: null

/*

Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, 
so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. 
The numbers will also all be unique and in ascending order. 
The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: 
https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1 Can you write a solution that will return null2 for both [] and [ x ] though? 
(This is an empty array and one with a single number and is not tested for, 
    but you can write your own example test. )

2
Swift, Ruby and Crystal: nil
Haskell: Nothing
Python, Rust, Scala: None
Julia: nothing
Nim: none(int) (See options)

*/

/*

Ваша задача - найти первый элемент массива, который не является последовательным.

Под непоследовательным мы понимаем элемент, который не больше предыдущего элемента массива ровно на 1.

Например, если у нас есть массив [1,2,3,4,6,7,8], то 1, 2, 3, 4 - все последовательные, а 6 - нет, 
поэтому это первое непоследовательное число.

Если весь массив является последовательным, то возвращается null2.

Массив всегда будет содержать не менее 2 элементов1 , и все элементы будут числами. 
Кроме того, все числа будут уникальными и расположены в порядке возрастания. 
Числа могут быть положительными или отрицательными, а первое непоследовательное число может быть любым!

Если вам понравилось это ката, попробуйте выполнить следующее: 
https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1 Можете ли вы написать решение, которое вернет null2 как для [], так и для [ x ]? 
(Это пустой массив и массив с единственным числом, который не проверяется, 
    но вы можете написать свой собственный пример теста. )

2
Swift, Ruby и Crystal: nil
Haskell: Ничего
Python, Rust, Scala: Нет
Julia: ничего
Nim: none(int) (см. опции)

*/
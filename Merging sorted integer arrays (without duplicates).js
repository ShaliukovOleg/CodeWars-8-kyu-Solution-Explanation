// Solution / Решение

function mergeArrays(a, b) {
    const mergedSet = new Set([...a, ...b]); // Объединяем два массива и удаляем дубликаты, с помощью Set
    const mergedArray = Array.from(mergedSet).sort((a, b) => a - b); // Преобразуем Set обратно в массив и сортируем его
    return mergedArray; // Возвращаем массив
}

// Short version

function mergeArrays(a, b) {
    return [...(new Set([...a, ...b].sort((a, b) => a - b)))];
}

// Or

const mergeArrays = (a, b) => Array.from(new Set([...a, ...b].sort((a, b) => a - b)));

// Tests

console.log(mergeArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]

/*

Write a function that merges two sorted arrays into a single one. The arrays only contain integers. 
Also, the final outcome must be sorted and not have any duplicate.

*/

/*

Напишите функцию, которая объединяет два отсортированных массива в один. Массивы содержат только целые числа. 
Кроме того, конечный результат должен быть отсортирован и не содержать дубликатов.

*/
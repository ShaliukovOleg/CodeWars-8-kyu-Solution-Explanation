// Solution / Решение

function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return []; // Проверка начального массива.
    const posNumLength = (input.filter(elem => elem > 0)).length; // Фильтруем положительные числа и получаем их количество
    const negNumSum = input.filter(elem => elem < 0).reduce((a, b) => a + b, 0); // Фильтруем отрицательные числа и суммируем их с помощью reduce()
    return [posNumLength, negNumSum]; // Возвращаем результат в виде массива
}

// Solution 2

function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return []; // Проверка начального массива.
    let positiveCount = 0; // Счетчик положительных значений в массиве
    let negativeSum = 0; // Сумма отрицательных чисел в массиве

    for (let i = 0; i < input.length; i++) { // Проходим по каждому элементу массива
        if (input[i] > 0) { // Положительные элементы
            positiveCount++; // Добавляем 1 к счетчику
        } else if (input[i] < 0) { // Отрицательные элементы
            negativeSum += input[i]; // Добавляем значение к сумме отрицательных значений
        }
    }

    return [positiveCount, negativeSum]; // Возвращаем результат в виде массива
}

// Solution 3

function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return []; // Проверка начального массива.
    return [(input.filter(elem => elem > 0)).length, input.filter(elem => elem < 0).reduce((a, b) => a + b, 0)]; // Возвращаем результат в виде массива
}

// Short version

function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return []; // Проверка начального массива.
    return [positiveCount, negativeSum] = input.reduce((acc, num) => { // Используем метод reduce для последовательной обработки элементов
        if (num > 0) acc[0]++; // Положительные элементы, увеличиваем счетчик положительных чисел.
        if (num < 0) acc[1] += num; // Отрицательные элементы, добавляем его к сумме отрицательных чисел.
        return acc; // Возвращаем аккумулятор для следующей итерации.
    }, [0, 0]); // Начальное значение аккумулятора: [0, 0].
}

// Tests

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

console.log(countPositivesSumNegatives(testData));
console.log()
console.log()

/*

Description
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

/*

Описание
Задается массив целых чисел.
Вернуть массив, в котором первый элемент - счетчик положительных чисел, а второй - сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным числом.
Если входной массив пуст или равен null, то возвращается пустой массив.

Пример
Для входных данных [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] следует вернуть [10, -65].

*/
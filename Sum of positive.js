// Solution / Решение

function positiveSum(arr) {
    // фильтруем массив и складываем его при помощи reduce
    return arr.filter(e => e > 0).reduce((a, b) => a + b, 0);
}

// Short version

const positiveSum = arr => arr.filter(e => e > 0).reduce((a, b) => a + b, 0);

// Tests

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));

/*

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

/*

Вы получаете массив чисел, возвращаете сумму всех положительных чисел.

Пример [1,-4,7,12] => 1 + 7 + 12 = 20

Примечание: если суммировать нечего, то сумма по умолчанию равна 0.

*/
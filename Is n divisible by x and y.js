// Solution / Решение

function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) return true; // мы просто проверяем каждый элемент последовательно и сравниваем остаток с нулем
    return false; // в случае неудачи возвращаем 'false'
}

// Short version

const isDivisible = (n, x, y) => !(n % x) && !(n % y);

// Tests

console.log(isDivisible(3,3,4)); // false
console.log(isDivisible(12,3,4)); // true
console.log(isDivisible(8,3,4)); // false
console.log(isDivisible(48,3,4)); // true

/*

Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

*/

/*

Создайте функцию, которая проверяет, делится ли число n на два числа x И y. Все входные данные - положительные ненулевые числа.

Примеры:
1) n = 3, x = 1, y = 3 => true, так как 3 делится на 1 и 3
2) n = 12, x = 2, y = 6 => true, так как 12 делится на 2 и 6
3) n = 100, x = 5, y = 3 => false, так как 100 не делится на 3
4) n = 12, x = 7, y = 5 => false, так как 12 не делится ни на 7, ни на 5

*/
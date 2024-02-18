// Solution / Решение

function multiply(number) {
    if (number === 0) return 0; // Если число 0, возвращаем 0
    const power = Math.abs(number).toString().length; // Вычисляем степень числа 5
    return number * Math.pow(5, power); // Умножаем число на 5 в степени power
}

// Tests

console.log(multiply(200)); // 25000
console.log(multiply(-2)); // -10
console.log(multiply(25)); // 625

/*

Jack really likes his number five: 
the trick here is that you have to multiply each number by 5 
raised to the number of digits of each numbers, 
so, for example:

multiply(3) == 15 // 3 * 5¹
multiply(10) == 250 // 10 * 5²
multiply(200) == 25000 // 200 * 5³
multiply(0) == 0 // 0 * 5¹
multiply(-3) == -15 // -3 * 5¹

*/

/*

Джеку очень нравится число 5: 
Хитрость заключается в том, что вам нужно умножить каждое число на 5 
возведенное в степень количество цифр каждого числа, 
так, например:

multiply(3) == 15 // 3 * 5¹
умножить(10) == 250 // 10 * 5²
умножить(200) == 25000 // 200 * 5³
умножить(0) == 0 // 0 * 5¹
multiply(-3) == -15 // -3 * 5¹

*/
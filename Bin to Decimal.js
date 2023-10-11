// Solution / Решение

function binToDec(bin) {
    let decimal = 0; // Для хранения десятичного значения
    let power = 0; // Для хранения степени двойки

    for (let i = bin.length - 1; i >= 0; i--) {
        if (bin[i] === '1') decimal += Math.pow(2, power); // Если текущий бит равен '1', добавляем 2^power к десятичному значению
        power++; // Увеличиваем степень двойки для следующего бита
    }
    return decimal; // Возвращаем десятичное значение
}

// Solution 2 

function binToDec(bin) {
    return bin.split('') // Разбиваем строку на массив символов
        .reverse() // Обращаем порядок элементов массива
        .map((x, i) => +x === 1 ? Math.pow(2, i) : 0) // Преобразуем каждый бит в его десятичное значение (2^i) или 0, если бит равен '0'
        .reduce((a, b) => a + b, 0); // Суммируем все десятичные значения, чтобы получить итоговое десятичное число
}

// Short version

// const binToDec = bin => parseInt(bin, 2);

// Tests

console.log(binToDec('1001001')); // 73
console.log(binToDec('100101')); // 37
console.log(binToDec('101001')); // 41

/*

Complete the function which converts a binary number (given as a string) to a decimal number.

*/

/*

Выполните функцию, которая преобразует двоичное число (заданное в виде строки) в десятичное.

*/
// Solution / Решение

function hexToDec(hexString) {
    const hexDigits = "0123456789ABCDEF";  // Допустимые шестнадцатеричные цифры
    let decimal = 0;  // Переменная для хранения десятичного значения
    const startIndex = hexString[0] === "-" ? 1 : 0;  // Проверяем наличие минуса в начале строки, если есть, начинаем с индекса 1

    for (let i = startIndex; i < hexString.length; i++) {
        const char = hexString[i].toUpperCase();  // Преобразуем символ в верхний регистр для унификации
        const digitValue = hexDigits.indexOf(char);  // Находим индекс символа в допустимых шестнадцатеричных цифрах
        if (digitValue !== -1) {
            decimal = decimal * 16 + digitValue;  // Умножаем текущее десятичное значение на 16 и добавляем значение текущей цифры
        } else {
            // Если символ не найден в допустимых цифрах, выбрасываем ошибку
            throw new Error("Invalid hex string");
        }
    }

    return startIndex === 1 ? -decimal : decimal;  // Если был минус, возвращаем отрицательное значение, в противном случае положительное
}

// Short version

const hexToDec = hexStr => parseInt(hexStr, 16);

// Tests

console.log(hexToDec("1"), 1);
console.log(hexToDec("a"), 10);
console.log(hexToDec("10"), 16);
console.log(hexToDec("FF"), 255);
console.log(hexToDec("-C"), -12);

/*

Complete the function which converts hex number (given as a string) to a decimal number.

*/

/*

Выполните функцию, которая преобразует шестнадцатеричное число (заданное в виде строки) в десятичное.

*/
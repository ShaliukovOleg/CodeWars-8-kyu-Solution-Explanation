// Solution / Решение (Через массив и reduce)

function fakeBin(x) {
    return x.split('').reduce((a, b) => a + (b > 4 ? 1 : 0), '');
}

// Solution 2 / Решение 2 (Через replace)

function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

// Short version

const fakeBin = x => x.split('').reduce((a, b) => a + (b > 4 ? 1 : 0), '');

// Tests

console.log(fakeBin('45385593107843568'));
console.log(fakeBin('509321967506747'));
console.log(fakeBin('366058562030849490134388085'));

/*

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
Return the resulting string.

Note: input will never be an empty string

*/

/*

В строке цифр необходимо заменить любую цифру ниже 5 на '0', а любую цифру 5 и выше на '1'. 
Вернуть полученную строку.

Примечание: входные данные никогда не будут пустой строкой

*/
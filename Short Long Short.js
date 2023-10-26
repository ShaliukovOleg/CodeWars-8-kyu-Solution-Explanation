// Solution / Решение

function solution(a, b) {
    return (a.length < b.length) ? a + b + a : b + a + b
}

// Short version

const solution = (a, b) => a.length < b.length ? a + b + a : b + a + b;

// Tests

console.log(solution('45', '1')); // 1451
console.log(solution('13', '200')); // 1320013
console.log(solution('Soon', 'Me')); // MeSoonMe
console.log(solution('U', 'False')); // UFalseU

/*

Given 2 strings, a and b, return a string of the form short+long+short, 
with the shorter string on the outside and the longer string on the inside. 
The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"

*/

/*

Если даны 2 строки, a и b, то верните строку вида short+long+short, 
причем более короткая строка находится снаружи, а более длинная - внутри. 
Строки не будут иметь одинаковую длину, но могут быть пустыми (нулевой длины).

Подсказка для пользователей R:

Длина строки не всегда совпадает с количеством символов.
Например: (Input1, Input2) --> выход

("1", "22") --> "1221"
("22", "1") --> "1221"

*/
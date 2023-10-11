// Solution / Решение

function makeNegative(num) {
    return num > 0 ? -num : num;
}

// Short version

const makeNegative = n => n > 0 ? -n : n;

// Tests

console.log()
console.log()
console.log()

/*

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

*/

/*

В этом простом задании вам дается число, и вы должны сделать его отрицательным. Но, может быть, число уже отрицательное?

Примеры
makeNegative(1); // вернуть -1
makeNegative(-5); // вернуть -5
makeNegative(0); // возвращается 0
makeNegative(0.12); // возвращается -0.12

Примечания
Число может быть уже отрицательным, в этом случае его изменение не требуется.
Нуль (0) не проверяется на наличие какого-либо определенного знака. Отрицательные нули не имеют математического смысла.

*/
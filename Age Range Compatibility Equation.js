// Solution / Решение

function datingRange(age) {
    return age > 14 // проверка на возраст 
        ? `${Math.floor(age / 2 + 7)}-${Math.floor((age - 7) * 2)}` // Нужно вернуть целое число, после тестов стало ясно, что Math.round не подойдет
        : `${Math.floor(age - 0.10 * age)}-${Math.floor((age + 0.10 * age))}` // Через косые кавычки самая короткая запись
}

// Solution 2 / Решение 2

function datingRange(age) { // в данном случае сначала проверка по возрасту, затем округление
    const min = age > 14 ? age / 2 + 7 : age - 0.10 * age;
    const max = age > 14 ? (age - 7) * 2 : age + 0.10 * age;
    return `${Math.floor(min)}-${Math.floor(max)}`;
}

// Tests

console.log(datingRange(17)); // 15-20
console.log(datingRange(40)); // 27-66
console.log(datingRange(15)); // 14-16
console.log(datingRange(35)); // 24-56
console.log(datingRange(10)); // 9-11

/*

Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). 
It's the 'recommended' age range in which to date someone.


minimum age <= your age <= maximum age

Task
Given an integer (1 <= n <= 100) representing a person's age, 
return their minimum and maximum age range.

This equation doesn't work when the age <= 14, so use this equation instead:

min = age - 0.10 * age
max = age + 0.10 * age
You should floor all your answers so that an integer is given instead of a float 
(which doesn't represent age). 
Return your answer in the form [min]-[max]

##Examples:

age = 27   =>   20-40
age = 5    =>   4-5
age = 17   =>   15-20

*/

/*

Всем известно классическое правило знакомств "половина твоего возраста плюс семь", которого придерживаются многие (в том числе и я). 
Это "рекомендуемый" возрастной диапазон, в котором можно встречаться с кем-либо.


минимальный возраст <= ваш возраст <= максимальный возраст

Задача
Дано целое число (1 <= n <= 100), представляющее возраст человека, 
вернуть его минимальный и максимальный возрастной диапазон.

Данное уравнение не работает, если возраст <= 14, поэтому вместо него используйте следующее уравнение:

min = age - 0.10 * age
max = age + 0.10 * age
Все ответы должны быть представлены в виде целых чисел, а не плавающих. 
(которое не представляет возраст). 
Верните ответ в виде [min]-[max]

##Примеры:

возраст = 27 => 20-40
возраст = 5 => 4-5
возраст = 17 => 15-20

*/
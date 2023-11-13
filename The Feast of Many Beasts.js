// Solution / Решение

function feast(beast, dish) {
    // проверяем первый и последний символы в аргументах и возвращаем true в случае успешной проверки
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

// Solution 2 / Решение 2

function feast(beast, dish) {
    return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length - 1])
}

// Short version

const feast = (beast, dish) => beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];

// Tests

console.log(feast("great blue heron", "garlic naan")); // true
console.log(feast("chickadee", "chocolate cake")); // true
console.log(feast("brown bear", "bear claw")); // false

/*

All of the animals are having a feast! Each animal is bringing one dish. 
There is just one rule: the dish must start and end with the same letters as the animal's name. 
For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and 
returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, 
and that each has at least two letters. beast and dish may contain hyphens and spaces, 
but these will not appear at the beginning or end of the string. 
They will not contain numerals.

*/

/*

Все животные устраивают пир! Каждое животное приносит с собой одно блюдо. 
Есть только одно правило: блюдо должно начинаться и заканчиваться теми же буквами, что и название животного. 
Например, большая голубая цапля принесет чесночный наан, а чикада - шоколадный торт.

Напишите функцию feast, которая принимает в качестве аргументов имя животного и блюдо и 
возвращает true или false, показывая, разрешено ли зверю приносить блюдо на пир.

Предположим, что зверь и блюдо всегда являются строчными строками, 
Зверь и блюдо могут содержать дефисы и пробелы, 
но не в начале и не в конце строки. 
Они не содержат цифр.

*/
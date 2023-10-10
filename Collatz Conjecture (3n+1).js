// Solution / Решение

let hotpo = function (n) {
    if (n === 1) {
        return 0; // n = 1, мы завершаем рекурсию
    } else if (n % 2 === 0) {
        return 1 + hotpo(n / 2); // n - четное, делим его на 2 и рекурсивно вызываем функцию с новым значением
    } else {
        return 1 + hotpo(3 * n + 1); // n - нечетное, умножаем его на 3 и добавляем 1, затем рекурсивно вызываем функцию
    }
}

// Short version

const hotpoShort = n => n === 1 ? 0 : 1 + hotpoShort(n % 2 === 0 ? n / 2 : 3 * n + 1);

// Tests

console.log(hotpo(5));
console.log(hotpo(6));
console.log(hotpo(23));

/*

The Collatz conjecture (also known as 3n+1 conjecture) 
is a conjecture that applying the following algorithm to any number we will always eventually reach one:

[This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + 1
#Task

Your task is to make a function hotpo that takes a positive n as input 
and returns the number of times you need to perform this algorithm to get n = 1.

#Examples

hotpo(1) returns 0
(1 is already 1)

hotpo(5) returns 5
5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(6) returns 8
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(23) returns 15
23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
#References

Collatz conjecture wikipedia page: https://en.wikipedia.org/wiki/Collatz_conjecture

*/

/*

Гипотеза Коллатца (также известная как гипотеза 3n+1) 
это гипотеза о том, что применяя следующий алгоритм к любому числу, мы всегда в конечном итоге придем к единице:
 
[Это записано в псевдокоде]
если(число четное) число = число / 2
если(число нечетное) число = 3*число + 1
#Задача

Ваша задача - сделать функцию hotpo, которая принимает на вход положительное число n 
и возвращает количество раз, которое необходимо выполнить для получения n = 1.

#Примеры

hotpo(1) возвращает 0
(1 - это уже 1)

hotpo(5) возвращает 5
5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(6) возвращает 8
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(23) возвращает 15
23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

#Ссылки
Страница википедии о гипотезе Коллатца: https://en.wikipedia.org/wiki/Collatz_conjecture

*/
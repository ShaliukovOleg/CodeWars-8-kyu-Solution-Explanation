// Solution / Решение

function checkAlive(health) {
    // просто используем тернартный оператор для краткой записи того, что health больше нуля
    return health > 0 ? true : false; 
}

// Tests

console.log(checkAlive(5)); // true
console.log(checkAlive(0)); // false

/*

If/else syntax debug
While making a game, your partner, Greg, decided to create a function to check 
if the user is still alive called checkAlive/CheckAlive/check_alive. 
Unfortunately, Greg made some errors while creating the function.

checkAlive/CheckAlive/check_alive should return true if the player's 
health is greater than 0 or false if it is 0 or below.

The function receives one parameter health which 
will always be a whole number between -10 and 10.

*/

/*

Отладка синтаксиса if/else
В процессе создания игры ваш партнер Грег решил создать функцию для проверки 
жив ли еще пользователь, под названием checkAlive/checkAlive/check_alive. 
К сожалению, Грег допустил несколько ошибок при создании функции.

checkAlive/CheckAlive/check_alive должна возвращать true, если здоровье игрока 
здоровье больше 0 и false, если оно равно 0 или меньше.

Функция получает один параметр health, который 
всегда будет целым числом от -10 до 10.

*/
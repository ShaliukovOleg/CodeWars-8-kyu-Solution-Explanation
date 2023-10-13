// Solution / Решение

function move(position, roll) {
    // return the new position
    return position + 2 * roll // начальную позицию прибавляем два броска по значению roll
}

// Short version

const move = (p, r) => p + r * 2;

// Tests

console.log(move(0, 4)); // 8
console.log(move(3, 6)); // 15
console.log(move(2, 5)); // 12

/*

Terminal game move function
In this game, the hero moves from left to right. 
The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15

*/

/*

Функция перемещения в терминальной игре
В этой игре герой перемещается слева направо. 
Игрок бросает кубик и два раза перемещается на указанное кубиком количество мест.

Создайте для терминальной игры функцию, которая принимает текущую позицию героя и бросок (1-6) и возвращает новую позицию.

Пример:
move(3, 6) должно быть равно 15

*/
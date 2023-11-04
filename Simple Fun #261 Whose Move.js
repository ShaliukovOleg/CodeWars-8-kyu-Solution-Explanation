// Solution / Решение

function whoseMove(lastPlayer, win) {
    //coding and coding..
    switch (true) { // используем switch true для удобного разделения на различные условия и их проверку
        case (lastPlayer === 'black' && win === true): 
            return 'black';
        case (lastPlayer === 'black' && win === false):
            return 'white';
        case (lastPlayer === 'white' && win === true):
            return 'white';
        case (lastPlayer === 'white' && win === false):
            return 'black';
    }
}

// Short version

const whoseMove = (lastPlayer, win) => (lastPlayer === (win ? 'black' : 'white')) ? 'black' : 'white';

// Tests

console.log(whoseMove("black", false)); // white
console.log(whoseMove("white", true)); // white
console.log(whoseMove("white", false)); // black

/*

Task
Two players - "black" and "white" are playing a game. 
The game consists of several rounds. If a player wins in a round, 
he is to move again during the next round. 
If a player loses a round, it's the other player who moves on the next round. 
Given whose turn it was on the previous round and whether he won, 
determine whose turn it is on the next round.

Input/Output
[input] string lastPlayer/$last_player

"black" or "white" - whose move it was during the previous round.
[input] boolean win/$win

true if the player who made a move during the previous round won, false otherwise.
[output] a string

Return "white" if white is to move on the next round, and "black" otherwise.

Example
For lastPlayer = "black" and win = false, the output should be "white".
For lastPlayer = "white" and win = true, the output should be "white".

*/

/*

Задача
Два игрока - "черные" и "белые" - играют в игру. 
Игра состоит из нескольких раундов. Если игрок выигрывает в одном из раундов, 
то в следующем раунде он снова делает ход. 
Если игрок проиграл раунд, то в следующем раунде ход делает другой игрок. 
Учитывая, чья очередь была в предыдущем раунде и выиграл ли он, 
определите, чей ход будет в следующем раунде.

Вход/выход
[input] string lastPlayer/$last_player

"черный" или "белый" - чей ход был в предыдущем раунде.
[input] boolean win/$win

true, если выиграл игрок, сделавший ход в предыдущем раунде, false - в противном случае.
[output] строка

Возвращает "white", если в следующем раунде ход должен быть сделан белыми, и "black" в противном случае.

Пример
Для lastPlayer = "black" и win = false должно быть выведено "white".
Для lastPlayer = "white" и win = true должно быть выведено "white".

*/
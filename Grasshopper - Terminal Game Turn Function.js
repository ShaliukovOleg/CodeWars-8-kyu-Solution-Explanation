// Solution / Решение

function doTurn() {
    rollDice(); // бросить кубик
    move(); // двигаться
    combat(); // сражаться
    getCoins(); // получить монеты
    buyHealth(); // купить больше здоровья
    printStatus(); // распечатать статус
}

/*

Terminal game turn function
You are creating a text-based terminal version of your favorite board game. 
In the board game, each turn has six steps that must happen in this order: 
roll the dice, move, combat, get coins, buy more health, and print status.

You are using a library (Game.Logic in C#) that already has the functions below. 
Create a function named doTurn/DoTurn/do_turn that calls the functions in the proper order as described in the paragraph above.

- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move

*/

/*

Функция поворота в терминальной игре
Вы создаете текстовую терминальную версию своей любимой настольной игры. 
В настольной игре каждый ход состоит из шести шагов, которые должны выполняться в таком порядке: 
бросок кубиков, перемещение, бой, получение монет, покупка здоровья и печать состояния.

Вы используете библиотеку (Game.Logic на C#), в которой уже есть приведенные ниже функции. 
Создайте функцию с именем doTurn/DoTurn/do_turn, которая будет вызывать эти функции в порядке, описанном в предыдущем абзаце.

- бой
- купить здоровье
- получить монеты
- printStatus
- бросить кости
- перемещение

*/
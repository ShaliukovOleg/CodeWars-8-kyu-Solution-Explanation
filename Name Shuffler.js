/*

Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output):

"john McClane" --> "McClane john"

*/

/*

Нужно написать функцию, которая возвращает строку, в которой первое и второе слово стоят в обратном порядке.

Пример (ввод --> вывод):
"john McClane" --> "McClane john"

*/

function nameShuffler(str) { // Создаем функцию, с одним аргументом (str - название для наглядности)
    return str // возвращаем строку, которая
    .split(" ") // Метод "split" превращает строку в массив (так как у нас указана подстрока " ", он разбирает не каждый символ, а только каждый символ после "пропуска" между ними)
    .reverse() // Разворачивает полученный массив в обратном порядке
    .join(" "); // Добавляет их в новую строку, со значением подстроки также пробел " "
}

console.log(nameShuffler('john McClane are you there') + '?');
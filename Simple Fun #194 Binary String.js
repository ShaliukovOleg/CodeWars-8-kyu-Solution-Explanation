// Solution / Решение

const binStr = (str) => // Объявление функции binStr с одним параметром str, представляющим строку из элементов (битов)
    [...str].reduce((acc, elem, index) => // Используется стрелочная функция и оператор spread (...) для преобразования строки str в массив
        acc += elem ^ (str[index - 1] || '0') && +!!(elem), // Используется метод reduce для итерации по массиву элементов и выполнения операций
        0); // Начальное значение аккумулятора равно 0

/*   

elem - текущий элемент массива
str[index - 1] || '0' - предыдущий элемент строки (когда элемента нет, при index равном нулю, берем ноль)
elem ^ (str[index - 1] || '0') - выполняется операция XOR
!!(bit) - преобразование текущего бита в булевое значение
+ перед !!(bit) - унарный плюс для преобразования в ноль или единицу

*/

// Tests

console.log(binStr("11111000011111")); // 3
console.log(binStr("000001111100000")); // 2
console.log(binStr("111000000000")); // 2
console.log(binStr("1010101011111111111111000000000")); // 10

/*

Task
You are given a binary string (a string consisting of only '1' and '0'). 
The only operation that can be performed on it is a Flip operation.

It flips any binary character ( '0' to '1' and vice versa) 
and all characters to the right of it.

For example, applying the Flip operation to the 4th character of string "1001010" 
produces the "1000101" string, since all characters from the 4th to the 7th are flipped.

Your task is to find the minimum number of flips required to convert 
the binary string to string consisting of all '0'.

Example
For s = "0101", the output should be 3.

It's possible to convert the string in three steps:

"0101" -> "0010"
   ^^^
"0010" -> "0001"
    ^^
"0001" -> "0000"
     ^

Input/Output
[input] string s
A binary string.

[output] an integer
The minimum number of flips required.

*/

/*

Задача
Вам дана двоичная строка (строка, состоящая только из '1' и '0'). 
Единственная операция, которую можно выполнить над ней, - это операция Flip.

Она переворачивает любой двоичный символ ("0" в "1" и наоборот) 
и все символы справа от него.

Например, если применить операцию Flip к 4-му символу строки "1001010" 
приводит к строке "1000101", так как все символы с 4-го по 7-й переворачиваются.

Ваша задача - найти минимальное количество переворотов, необходимое для преобразования 
двоичную строку в строку, состоящую из одних "0".

Пример
Для s = "0101" на выходе должно получиться 3.

Можно преобразовать строку за три шага:

"0101" -> "0010"
   ^^^
"0010" -> "0001"
    ^^
"0001" -> "0000"
     ^
     
Ввод/вывод
[input] string s
Двоичная строка.

[выход] целое число
Минимальное количество необходимых подбрасываний.

*/
// Solution / Решение

function array(string) {
    let arr = string.split(','); // Разбиваем строку на подстроки, используя запятые в качестве разделителей
    arr = arr.map(substring => substring.trim()); // Удаляем лишние пробелы в начале и конце каждой подстроки
    arr = arr.slice(1, -1); // Удаляем первую и последнюю подстроку
    let result = arr.join(' '); // Объединяем оставшиеся подстроки в одну строку, разделяя их пробелами
    return result.length > 0 ? result : null; // Если результат не равен нулю, возвращаем её, иначе возвращаем null
}

// Short version

function array(string) {
    const result = string.split(',').slice(1, -1).join(' ');
    return result.length > 0 ? result : null;
}

// Or 

const array = string => string.split(',').slice(1, -1).join(' ') || null;

// Tests

console.log(array('1,2,3,4')); // 2 3
console.log(array('A1,B2,C3,D4,E5')); // B2 C3 D4
console.log(array('A,1,23,456,78,9,Z')); // 1 23 456 78 9

/*

This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.
Write a function which returns a new string containing the same character sequences 
except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, 
return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL

*/

/*

Это продолжение моего первого ката.

Вам дана строка, содержащая последовательность символов, разделенных запятыми.
Напишите функцию, которая возвращает новую строку, содержащую те же последовательности символов 
за исключением первой и последней, но на этот раз разделенных пробелами.

Если входная строка пуста или удаление первого и последнего элементов приведет к тому, что результирующая строка окажется пустой, 
возвращает пустое значение (в примерах ниже оно представлено как общее значение NULL).

Примеры
"1,2,3" => "2"
"1,2,3,4" => "2 3"
"1,2,3,4,5" => "2 3 4"

"" => NULL
"1" => NULL
"1,2" => NULL

*/
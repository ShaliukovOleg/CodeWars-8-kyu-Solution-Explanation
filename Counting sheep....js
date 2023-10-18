// Solution / Решение

function countSheeps(sheep) {
    return sheep.reduce((acc, elem) => acc + (elem === true ? 1 : 0), 0); // проходим по каждому элементу массива и суммируем только true
}

// Short

const countSheeps = arr => arr.reduce((acc, elem) => acc + (elem === true ? 1 : 0), 0);

// Tests

console.log(countSheeps([undefined,null,false,true])); // 1
console.log(countSheeps([undefined,null,false,true,true,false,null,undefined])); // 2
console.log(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true])); // 17

/*

Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array 
(true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

*/

/*

Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать на своем месте. 
Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве 
(true означает наличие).

Например,

[true, true, true, true, false,
  true, true, true, true, true ,
  true, false, true, false , true, false ,
  true, false, false, true ,
  true, true, true, true, true ,
  false, false, false, true, true].
Правильным ответом будет 17.

Подсказка: Не забывайте проверять на наличие плохих значений, таких как null/undefined

*/
// Solution / Решение

function sumArray(array) { 
    return array.length > 1 && Array.isArray(array) // Проверка условия: длина массива больше 1 и array является массивом
        ? array // Если условие истинно, возвращаем результат выражения
            .reduce((s, n) => s + n, 0) - Math // Суммируем элементы массива с помощью reduce, начиная с 0
                .min(...array) - Math // Вычитаем минимальное значение из массива, используя Math.min
                    .max(...array) // Вычитаем максимальное значение из массива, используя Math.max
        : 0 // Возвращаем 0, если условие не выполнено
}

// Tests

console.log(sumArray([ 6, 2, 1, 8, 10 ])); // 16
console.log(sumArray([ 0, 1, 6, 10, 10 ])); // 17
console.log(sumArray([ -6, -20, -1, -10, -12 ])); // -28

/*

Task
Sum all the numbers of a given array ( cq. list ), 
except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, 
even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, 
or the given array is an empty list or a list with only 1 element, return 0.

*/

/*

Задача
Просуммируйте все числа заданного массива (cq. list), 
за исключением самого высокого и самого низкого элемента (по значению, а не по индексу!).

Наибольший или наименьший элемент соответственно является единственным элементом на каждом краю, 
даже если их несколько с одинаковым значением.

Не забывайте о проверке ввода.

Пример
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Валидация ввода
Если вместо массива задано пустое значение ("null", "None", "Nothing" и т. д.), 
или массив является пустым списком или списком, содержащим только 1 элемент, возвращается 0.

*/
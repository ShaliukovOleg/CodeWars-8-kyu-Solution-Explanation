/*

Find Mean
Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers 1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list. 16/4 = 4
3. The mean (or average) of this list is 4

*/

/*

Найти среднее значение
Найдите среднее значение списка чисел в массиве.

Информация
Чтобы найти среднее значение набора чисел, нужно сложить все числа и разделить на количество значений в списке.

Для примера список из 1, 3, 5, 7

1. Сложить все числа 1+3+5+7 = 16
2. Разделить на количество значений в списке. В данном примере в списке 4 числа. 16/4 = 4
3. Среднее значение (или средняя величина) этого списка = 4

*/

// В данном случае используем метод 'reduce' для перебора элементов массива и сложения их, 
// а затем просто делим на количество элементов в массиве
var findAverage = function (nums) {
    return (nums.reduce((a, b) => a + b, 0) / nums.length);
}

// Кратчайшая запись:
const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;

// Через перебор элементов:
let findAverage = (nums) => {
    let sum = 0;
    for (num in nums) {
        sum += nums[num];
    }
    return sum / nums.length;
}
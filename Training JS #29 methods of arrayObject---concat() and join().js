// Solution / Решение

function bigToSmall(arr) {
    //coding here...
    const result = []; // Массив для результата
    arr.forEach(elem => Array.isArray(elem) ? result.push(...elem) : result.push(elem)); // Проверяем каждый вложенный элемент массива на то, является ли он массивом или нет. (Без рекурсии)
    return result.sort((a, b) => b - a).join('>'); // сортируем согласно условию => добавляем все элементы массива в строку => возвращаем строку
}

// Solution 2 / Решение 2

function bigToSmall(arr) {
    //coding here...
    const result = [];
    arr.forEach(elem => Array.isArray(elem) ? result.push(...elem) : result.push(elem));
    return result.sort((a, b) => b - a).join('>');
}

// Solution 3 / Решение 3 (СТЕК)

function bigToSmall(arr) {
    const stack = [...arr]; // Для хранения элементов массива
    const result = []; // Для результата

    while (stack.length > 0) {
        const item = stack.pop(); // при каждой итерации берем элемент из стека 

        if (Array.isArray(item)) {
            // Если элемент является массивом, добавляем его элементы в стек
            stack.push(...item);
        } else {
            result.push(item);
        }
    }

    return result.sort((a, b) => b - a).join('>');
}

// Short version 

const bigToSmall = arr => [].concat(...arr).sort((a, b) => b - a).join('>');

// Tests

console.log(bigToSmall([[1, 2], [3, 4], [5, 6], 5])); // 6>5>5>4>3>2>1
console.log(bigToSmall([[1, 3, 5], [2, 4, 6]])); // 6>5>4>3>2>1
console.log(bigToSmall([[1, 1], [1], [1, 1]])); // 1>1>1>1>1

/*

This lesson we learn two methods of array: concat() and join(). We have seen concat() in the stringObject method, 
but the method of the arrayObject is different from the stringObject method, so we need to learn again. 
When studying the stringObject method split(), we have simply learned the join() method. 
This time we will review and explain it in detail.

Their definitions and syntax please refer to:
Array.prototype.concat()
Array.prototype.join()
(Please forgive me for my laziness;-)

Here are some examples to help us understand the use of concat() and join():
We first learn the concat() method, which can add some elements 
to the end of the array.concat() can have more and more parameters, 
and the parameter can be values, array or otherthings. 

Look this example:
var arr1=[1,2,3],arr2=[4,5,6];
//The following ways can achieve the same purpose:
//It can use an array as parameter
console.log(arr1.concat(arr2));
//also can use some values as parameters
console.log(arr1.concat(4,5,6));
//also can use more than one array as parameters
console.log(arr1.concat([4],[5],[6]));
//use ... accept the value of an enumeration
console.log(arr1.concat(...arr2));
//It can be used continuously
console.log(arr1.concat(4).concat(5).concat(6)); 

//output:
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]

concat() can be used for the flat output of two-dimensional or multidimensional arrays. look this example:
var arr=[[1,2],[3,4],[5,6]];
var result=[];
for (var i=0;i<arr.length;i++) 
  result=result.concat(arr[i]);
console.log(result);    //output: [ 1, 2, 3, 4, 5, 6 ]

This example by traversing the array and concat() method to get a one-dimensional array, 
which contains all the elements of the two-dimensional array. Or use more simple code:
var arr=[[1,2],[3,4],[5,6]];
var result=[].concat(...arr);
console.log(result);    //output: [ 1, 2, 3, 4, 5, 6 ]
...arr takes all the elements of arr (some one-dimensional array) as parameters of concat().

Here we look at some examples of join(). Its main purpose is to merge the elements of an array into a string, 
using a parameter separator to connect each element. 
If the separator is omitted, the default separator is ",":
var arr=[1,2,3,4,5];
console.log(arr.join());      //output: 1,2,3,4,5
console.log(arr.join(","));   //output: 1,2,3,4,5
console.log(arr.join(" "));   //output: 1 2 3 4 5
console.log(arr.join("and")); //output: 1and2and3and4and5

One of its classic applications is to produce a specified number of repeating characters:
function repeat(s,n){
  return [...Array(n+1)].join(s);
}
console.log(repeat("a",5)); //output: aaaaa
console.log(repeat("abc",5)); //output: abcabcabcabcabc

It is also a good choice to connect multiple strings. 
When there is a large number of strings that need to be connected to a string, 
the use of the + operator speed is slow, 
the correct method should be to put them into the array, 
and then use the join() method:
//use + operator:
var result="";
for (var i=0;i<26;i++) 
  result+=String.fromCharCode(97+i);
console.log(result)   //output: abcdefghijklmnopqrstuvwxyz
//use join() method:
var cache=[];
for (var i=0;i<26;i++) cache[i]=String.fromCharCode(97+i);
var result=cache.join("");
console.log(result)   //output: abcdefghijklmnopqrstuvwxyz

Of course, when the amount of data is very small, 
we do not feel the difference in speed.
Ok, lesson is over. let's us do some task.

======== Task ========

Coding in function bigToSmall. function accept 1 parameter arr(2D number array).
Your task is: First to all, refer to the example above, 
flat output arr to a one-dimensional array.

And then sort array in descending order.

Finally, use the separator ">" to connect the elements into a string.

Don't complain about the situation like 1>1 is not reasonable, 
it is just a separator.

Some example:

bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"

*/

/*

В этом уроке мы изучаем два метода массива: concat() и join(). Мы уже встречали concat() в методе stringObject, 
но метод arrayObject отличается от метода stringObject, поэтому нам придется учиться заново. 
При изучении метода stringObject split() мы просто выучили метод join(). 
На этот раз мы рассмотрим и объясним его подробно.

Их определения и синтаксис см:
Array.prototype.concat()
Array.prototype.join()
(Прошу простить меня за мою лень;-)

Приведем несколько примеров, которые помогут нам понять использование concat() и join():
Сначала мы изучим метод concat(), который позволяет добавлять некоторые элементы 
в конец массива.concat() может иметь все больше и больше параметров, 
Параметрами могут быть значения, массивы или другие элементы. 

Посмотрите на этот пример:
var arr1=[1,2,3],arr2=[4,5,6];
//Для достижения той же цели можно воспользоваться следующими способами:
//В качестве параметра может использоваться массив
console.log(arr1.concat(arr2));
//Также можно использовать несколько значений в качестве параметров
console.log(arr1.concat(4,5,6));
//также можно использовать в качестве параметров более одного массива
console.log(arr1.concat([4],[5],[6]));
//использовать ... принимать значение перечисления
console.log(arr1.concat(...arr2))
//Использование может быть непрерывным
console.log(arr1.concat(4).concat(5).concat(6)); 

//output:
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]

concat() может быть использована для плоского вывода двумерных или многомерных массивов. посмотрите этот пример:
var arr=[[1,2],[3,4],[5,6]];
var result=[];
for (var i=0;i<arr.length;i++) 
  result=result.concat(arr[i]);
console.log(result); //вывод: [ 1, 2, 3, 4, 5, 6 ]

В данном примере путем обхода массива и использования метода concat() получен одномерный массив, 
который содержит все элементы двумерного массива. Или можно использовать более простой код:
var arr=[[1,2],[3,4],[5,6]];
var result=[].concat(...arr);
console.log(result); //вывод: [ 1, 2, 3, 4, 5, 6 ]
...arr принимает в качестве параметров concat() все элементы arr (некоторого одномерного массива).

Далее мы рассмотрим несколько примеров работы функции join(). Ее основное назначение - объединение элементов массива в строку, 
при этом для соединения каждого элемента используется параметр-разделитель. 
Если разделитель опущен, то по умолчанию используется разделитель ",":
var arr=[1,2,3,4,5];
console.log(arr.join()); //вывод: 1,2,3,4,5
console.log(arr.join(",")); //вывод: 1,2,3,4,5
console.log(arr.join(" ")); //output: 1 2 3 4 5
console.log(arr.join("and")); //вывод: 1и2и3и4и5

Одно из классических применений этой функции - выдача заданного количества повторяющихся символов:
function repeat(s,n){
  return [...Array(n+1)].join(s);
}
console.log(repeat("a",5)); //вывод: aaaaa
console.log(repeat("abc",5)); //output: abcabcabcabcabcabc

Это также хороший выбор для соединения нескольких строк. 
Когда необходимо соединить большое количество строк, 
использование оператора + приводит к снижению скорости, 
правильнее будет поместить их в массив, 
а затем использовать метод join():
//использование оператора +:
var result="";
for (var i=0;i<26;i++) 
  result+=String.fromCharCode(97+i);
console.log(result) //вывод: abcdefghijklmnopqrstuvwxyz
//используем метод join():
var cache=[];
for (var i=0;i<26;i++) cache[i]=String.fromCharCode(97+i);
var result=cache.join("");
console.log(result) //вывод: abcdefghijklmnopqrstuvwxyz

Конечно, когда объем данных очень мал, 
мы не почувствуем разницы в скорости.
Итак, урок закончен, давайте выполним несколько задач.

======== Задача ========

Кодирование в функции bigToSmall. Функция принимает 1 параметр arr(двумерный массив чисел).
Ваша задача: Прежде всего, обратитесь к приведенному выше примеру, 
плоский вывод arr в одномерный массив.

Затем отсортировать массив в порядке убывания.

И, наконец, с помощью разделителя ">" соединить элементы в строку.

Не стоит сетовать на то, что 1>1 - это неразумно, 
это просто разделитель.

Пример:

bigToSmall([[1,2],[3,4],[5,6]]) должно возвращать "6>5>4>3>2>1"
bigToSmall([[1,3,5],[2,4,6]]) должен вернуть "6>5>4>3>2>1"
bigToSmall([[1,1],[1],[1,1]]) должен вернуть "1>1>1>1>1>1"

*/
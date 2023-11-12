// Solution / Решение

function addExtra( listOfNumbers ){
    return listOfNumbers.concat(['extraElement']); // просто добавляем к вводному массиву новый элемент и возвращаем его
}

// Short verson

const addExtra = arr => [...arr, 'extra'];

// Tests

console.log(addExtra([1,2,3]).length); // 4
console.log(addExtra([1,2]).length, ); // 3
console.log(addExtra([]).length); // 1

/*

Add an item to the list:

AddExtra method adds a new item to the list and returns the list. 
The new item can be any object, and it does not matter. 
(lets say you add an integer value, like 13)

In our test case we check to assure that the returned list has one more item than the input list. 
However the method needs some modification to pass this test.

P.S. You have to create a new list and add a new item to that. 
(This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work, 
    even though the parameter is passed by value, 
    but the value is poining to the reference of list and any change on parameter will be seen by caller)

*/

/*

Добавляет элемент в список:

Метод AddExtra добавляет в список новый элемент и возвращает список. 
Новый элемент может быть любым объектом, и это не имеет значения. 
(допустим, вы добавляете целое значение, например 13).

В нашем тестовом примере мы проверяем, что в возвращаемом списке на один элемент больше, чем во входном. 
Однако для прохождения этого теста метод нуждается в некоторой модификации.

P.S. Вы должны создать новый список и добавить в него новый элемент. 
(Этот пример изначально был разработан для языка C#, и он показывает, что добавление нового элемента во входной список не работает, 
    даже если параметр передается по значению, 
    но значение указывает на ссылку списка, и любое изменение параметра будет видно вызывающей стороне)

*/
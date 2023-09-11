/*

It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string. 

*/

/*
 
Две строки легко соединить вместе, например строку1 + строку2.

Другой способ получить желаемый результат - использовать string1.concat(string2)

ES6 представил еще один способ соединения строк. Ваша задача — выяснить, что это такое, и написать функцию, которая будет складывать две строки вместе, между двумя строками должен быть пробел.

+ , .concat() и .join() не разрешены в этом упражнении. Также убраны некоторые другие методы, которые можно использовать для обмана!

*/

function joinStrings(string1, string2) {
    // В версии ES6 были добавлены обратные кавычки, они и помогут решить нам данную задачу.
    return `${string1} ${string2}`;
}

console.log(joinStrings('Какая-то', 'фраза!'));
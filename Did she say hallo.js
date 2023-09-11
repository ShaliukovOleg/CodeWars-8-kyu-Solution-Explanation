/*

You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests

*/

/*

Напишите простую функцию, проверяющую, содержит ли строка слово «Hello» на разных языках. 

Возможные варианты языков, которые вам необходимо проверить:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish

*/

function validateHello(greetings) {
    let res = /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings);  
    //regex here/.test(greetings);
    // Как показывает сама подсказка, здесь достаточно использовать регулярное выражение, чтобы проверить операнд на наличие того или иного значения.
    // В регулярное выражение добавлены все фразы, которые указаны в условии, а также "i", которое указывает, что нас не интересует в какой регистре указаны вводные данные (т.е. и большие и маленькие символы)
    // Дополнительных условий нет.

    // Так как тут не требуется изменять переменную, то можно её записать через const;
    // const res = /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings); 

    return res; // При выходе из цикла вернем значение переменной. 
};

console.log(validateHello('Hola'));
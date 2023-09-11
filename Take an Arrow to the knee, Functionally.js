/*

Arrow style Functions
Come here to practice the Arrow style functions Not much else to say good luck!
Details
You will be given an array of numbers which can be used using the String.fromCharCode() (JS), 
Tools.FromCharCode() (C#) method to convert the number to a character. 
It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

Examples
These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a
C# => Tools.FromCharCode(97) // a

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

*/

/*

Стрелочная функция
Вам будет предоставлен массив чисел, которые можно использовать с помощью методов String.fromCharCode() (JS), 
Tools.FromCharCode() (C#) для преобразования числа в символ. 
Рекомендуется выполнять сопоставление массива чисел и преобразование каждого числа в соответствующий ascii символ.

Примеры
Вот примеры преобразования числа в ascii символ:
Javascript => String.fromCharCode(97) // a
C# => Tools.FromCharCode(97) // a

Ссылка: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

*/

// В данном случае нам просто нужно прописать как в примере 
// String.fromCharCode - выполняет преобразование чисел Unicode в соответствующие символы.
var ArrowFunc = function (arr) {
    return arr.map(num => String.fromCharCode(num)).join('');
}

// Если хочется написать все кратко, то:
// Здесь используем стрелочную функцию и метод spread для разворачивания массива
const ArrowFunc = (arr) => String.fromCharCode(...arr);

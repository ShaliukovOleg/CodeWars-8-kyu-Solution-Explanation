// Solution / решение

const STRANGE_STRING = "ᾳ"

// Сюда можно добавить различные символы и маркировки с Unicode чтобы пройти задание, вот возможные варианты:
// "ᾼ" (U+1FBC): Длина после преобразования: 1 ⇒ 2.
// "ᾲ" (U+1FB2): Длина после преобразования: 2 ⇒ 3.
// "ᾷ" (U+1FB7): Греческая буква альфа с грависом и диакритической обратной чертой.
// "ᾶ" (U+1FB6): Греческая буква альфа с грависом.
// "ᾴ" (U+1FB4): Греческая буква альфа с ударением и диакритической обратной чертой.

/*

Many programming languages provide the functionality of converting a string to uppercase or lowercase. 
For example, upcase/downcase in Ruby, upper/lower in Python, and toUpperCase/toLowerCase in Java/JavaScript, 
uppercase/lowercase in Kotlin. Typically, these methods won't change the size of the string.

For example, in Ruby, str.upcase.downcase.size == str.size is true for most cases.
However, in some special cases, the length of the transformed string may be longer than the original. 
Can you find a string that satisfies this criteria?

For example, in Ruby, That means str.upcase.downcase.size > str.size
You should just set the value of STRANGE_STRING to meet the previous criteria.

Note: Meta programming is not allowed in this kata. So, the size of your solution is limited.

*/

/*

Многие языки программирования предоставляют возможность преобразования строки в верхний или нижний регистр. 
Например, upcase/downcase в Ruby, upper/lower в Python, toUpperCase/toLowerCase в Java/JavaScript, 
uppercase/lowercase в Kotlin. Как правило, эти методы не изменяют размер строки.

Например, в Ruby для большинства случаев верно str.upcase.downcase.size == str.size.
Однако в некоторых особых случаях длина преобразованной строки может оказаться больше исходной. 
Можете ли вы найти строку, удовлетворяющую этому критерию?

Например, в Ruby это означает, что str.upcase.downcase.size > str.size.
Следует просто установить значение STRANGE_STRING, чтобы оно удовлетворяло предыдущему критерию.

Примечание: Метапрограммирование в этом ката не допускается. Поэтому размер вашего решения ограничен.

*/


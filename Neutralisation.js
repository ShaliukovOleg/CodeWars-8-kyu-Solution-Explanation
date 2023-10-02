// Solution / Решение

function neutralise(s1, s2) {
    let result = ""; // Для хранения результата
    for (let i = 0; i < s1.length; i++) { // Цикл, для каждого символа в строке s1
        switch (true) { // для условий, где больше двух проверок
            case s1[i] === "+" && s2[i] === "+": // символы равны "+"
                result += "+";
                break;
            case s1[i] === "-" && s2[i] === "-": // символы равны "-"
                result += "-";
                break;
            default: // символы не равны
                result += "0";
        }
    }
    return result; // Возвращаем результат
}

// Short version

function neutralise(s1, s2) {
    return s1
        .split('') // преобразуем строку в массив
        .map((c, i) => (c === s2[i] ? c : '0')) // используем метод map для перебора каждого элемента по индексу и сравнение элемента по индексу с массивом s2
        .join(''); // собираем результат в строку
}

// Tests

console.log(neutralise("--++--", "++--++")); // 000000
console.log(neutralise("-+-+-+", "-+-+-+")); // -+-+-+
console.log(neutralise("+++--+---", "++----++-")); // ++0--000-

/*

Given two strings comprised of + and -, 
return a new string which shows how the two strings 
interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, 
they become neutral, and are shown as the number 0.

Worked Example
("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.

Examples
("--++--", "++--++") ➞ "000000"
("-+-+-+", "-+-+-+") ➞ "-+-+-+"
("-++-", "-+-+") ➞ "-+00"

Notes
The two strings will be the same length.

*/

/*

Даны две строки, состоящие из + и -, 
вернуть новую строку, которая показывает, как эти две строки 
взаимодействуют следующим образом:

При взаимодействии положительных и отрицательных чисел они остаются положительными.
При взаимодействии отрицательного и отрицательного чисел они остаются отрицательными.
Когда же взаимодействуют отрицательные и положительные, 
они становятся нейтральными и отображаются в виде числа 0.

Пример из практики
("+-+", "+--") ➞ "+-0"
# Сравниваем первые символы каждой строки, затем по очереди следующие.
# "+" против "+" возвращает еще один "+".
# "-" против "-" возвращает еще один "-".
# "+" против "-" возвращает "0".
# Возвращает строку символов.

Примеры
("--++--", "++--++") ➞ "000000"
("-+-+-+", "-+-+-+") ➞ "-+-+-+"
("-++-", "-+-+") ➞ "-+00"

Примечания
Обе строки будут иметь одинаковую длину.

*/
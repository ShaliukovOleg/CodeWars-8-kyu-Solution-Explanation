// Solution / Решение

function yearDays(year) {
    return `${year} has ${!(year % 4) && year % 100 !== 0 || !(year % 400) ? 366 : 365} days`;
}

// Tests

console.log(yearDays(2016)); // 2016 has 366 days
console.log(yearDays(1974)); // 1974 has 365 days
console.log(yearDays(-10)); // -10 has 365 days

/*

A variation of determining leap years, 
assuming only integers are used and years can be negative and positive.

Write a function which will return the days in the year and the year entered in a string. 
For example:

yearDays(2000) returns "2000 has 366 days"
There are a few assumptions we will accept the year 0, 
even though there is no year 0 in the Gregorian Calendar.

Also the basic rule for validating a leap year are as follows
Most years that can be divided evenly by 4 are leap years.

Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

So the years 0, -64 and 2016 will return 366 days. 
Whilst 1974, -10 and 666 will return 365 days.

*/

/*

Вариант определения високосных лет, 
предполагается, что используются только целые числа, а годы могут быть отрицательными и положительными.

Напишите функцию, которая будет возвращать дни в году и год, введенный в строку. 
Например:

yearDays(2000) возвращает "В 2000 году 366 дней".
Есть несколько предположений, что мы примем год за 0, 
даже если в григорианском календаре нет 0-го года.

Также основное правило для проверки високосного года заключается в следующем
Большинство лет, которые можно равномерно разделить на 4, являются високосными.

Исключение: Столетние годы НЕ являются високосными, ЕСЛИ их можно равномерно разделить на 400.

Таким образом, годы 0, -64 и 2016 вернут 366 дней. 
В то время как 1974, -10 и 666 годы вернут 365 дней.

*/
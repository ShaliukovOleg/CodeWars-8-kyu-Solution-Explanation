// Solution / Решение

//return price without vat
function excludingVatPrice(price) {
    if (price === null) return -1; // Проверка на null
    let initialPrice = price / (1 + (0.15)); // Вычисление начальной цены без НДС
    return Math.round(initialPrice * 100) / 100; // Округление до двух десятичных знаков
}

// Short version

function excludingVatPrice(price) {
    return price === null ? -1 : +(price / 1.15).toFixed(2);
}

// Tests

console.log(excludingVatPrice(230)); // 200.00
console.log(excludingVatPrice(123)); // 106.96

/*

Write a function that calculates the original product price, without VAT.

Example
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1

*/

/*

Написать функцию, которая вычисляет исходную цену товара без НДС.

Пример
Если цена товара составляет 200,00, а НДС - 15%, то конечная цена товара (с НДС) составляет: 200.00 + 15% = 230.00

Таким образом, если ваша функция получает на вход 230.00, то она должна вернуть 200.00.

Примечания:

Для целей данного Ката НДС всегда равен 15%.
Округлите результат до 2 знаков после запятой.
Если дано нулевое значение, то вернуть -1

*/
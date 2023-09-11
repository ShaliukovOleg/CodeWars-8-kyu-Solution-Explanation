/*

Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? 
Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

*/

/*

Разве две функции getMax1 и getMax2 не должны быть эквивалентны и возвращать одно и то же значение? 
Можете ли вы заметить проблему и устранить ее? Можете ли вы узнать что-то о стиле JavaScript из этого ката?

*/

// Проблема заключается во второй функции. 
function getMax1() {
    var max =
    {
        name: 'Max Headroom'
    }
    return max;
}

function getMax2() // Лишний перенос строки, из-за которого не срабатывает return правильно
{
    return
    {
        name: 'Max Headroom'
    };
}

// Правильный и рабочий вариант

function getMax1() {
    var max =
        { name: 'Max Headroom' }
    return max;
}

function getMax2() {
    return {
        name: 'Max Headroom'
    }
}

console.log(getMax1());
console.log(getMax2());
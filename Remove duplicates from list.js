// Solution / Решение

function distinct(a) {
    return [...new Set(a)]; // Создаем коллекцию уникальных элементов и с помощью оператора spread разворачиваем её обратно в массив
}

// Solution 2 / Решение 2 (Array.from)

function distinct(a) {
    return Array.from(new Set(a));
}

// Solution 3 / Решение 3 (filter)

function distinct(a) {
    return a.filter((item, index) => a.indexOf(item) === index); // indexOf(находит индекс первого элемента массива и возвращает его)
}

// Solution 4 / Решение 4 (cycle)

function distinct(a) {
    const uniqElem = [];
    for (let i = 0; i < a.length; i++) {
        if (!uniqElem.includes(a[i])) {
            uniqElem.push(a[i]);
        }
    }
    return uniqElem;
}

// Short version

const distinct = a => [...new Set(a)];

// Tests

console.log(distinct([1])); // [1]
console.log(distinct([1, 2])); // [1, 2]
console.log(distinct([1, 1, 2])); // [1, 2]

/*

Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
The order of the sequence has to stay the same.

Examples:
Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]

*/

/*

Определите функцию, которая удаляет дубликаты из массива неотрицательных чисел и возвращает его в качестве результата.
Порядок следования должен оставаться неизменным.

Примеры:
Вход -> Выход
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]

*/
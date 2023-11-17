// Solution / Решение

function findNeedle(array) {
    // your code here
    for (var i = 0; i < array.length; i++) { // Проходим по элементам массива
        if (array[i] === 'needle') return `found the needle at position ${i}`; // при нахождении 'иголки', возвращаем строку и индекс (позицию 'иголки') в массиве
    }
}

// Solution 2 / Решение 2

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`; // Используем косые кавычки и добавляем к ответу индекс needle в исследуемом массиве
}

// Short version

const findNeedle = hs => `found the needle at position ${hs.indexOf('needle')}`;

// Tests

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false])); // found the needle at position 3
console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'])); // found the needle at position 5
console.log(findNeedle([1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54])); // found the needle at position 30

/*

Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

Note: In COBOL, it should return "found the needle at position 6"

*/

/*

Можете ли вы найти иголку в стоге сена?
Напишите функцию findNeedle(), которая принимает массив, полный мусора, но содержащий одну "иголку".
После того как функция найдет иголку, она должна вернуть сообщение (в виде строки), которое будет содержать:
"найдена игла в позиции " плюс индекс, по которому она была найдена, таким образом:

Пример(Вход --> Выход)

["сено", "хлам", "сено", "сено", "moreJunk", "игла", "randomJunk"] --> "найдена игла в позиции 5". 

Примечание: В языке COBOL должно возвращаться "найдена игла в позиции 6".

*/
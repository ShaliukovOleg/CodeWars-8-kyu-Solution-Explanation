/*

Check your arrows
You have a quiver of arrows, but some have been damaged. 
The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), 
so each item is an arrow.
You need to verify that you have some good ones left, in order to prepare for battle:

anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
If an arrow in the quiver does not have a damaged status, it means it's new.

The expected result is a boolean, indicating whether you have any good arrows left.

*/

/*

Проверьте свои стрелы
У вас есть колчан со стрелами, но некоторые из них были повреждены. 
Колчан содержит стрелы с дополнительной информацией о дальности (разные типы целей располагаются на разных расстояниях), 
поэтому каждый предмет - это стрела.

Чтобы подготовиться к бою, необходимо проверить, остались ли у вас хорошие стрелы:
anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
Если стрела в колчане не имеет статуса damaged, это означает, что она новая.

Ожидаемый результат - булево число, показывающее, остались ли у вас хорошие стрелы.

*/

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


// В данном случае нам нужно перебрать массив "стрел" при помощи метода some, 
// который вернет 'true', если хоть одна стрела будет не повреждена 'damaged: true'
function anyArrows(arrows) {
    // Проверяем массив стрел, каждое значение массива на отсутствие 'повреждений'
    return arrows.some(arrow => !arrow.damaged);
}

// Можно записать в одну строку
const anyArrows = arrows => arrows.some(arrow => !arrow.damaged);
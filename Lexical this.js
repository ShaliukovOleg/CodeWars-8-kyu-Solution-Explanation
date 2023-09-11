/*

Lexical this
Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
Output
Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.

*/

/*

Лексическое значение this
Завершить создание объекта Person, выполнив функцию FillFriends для заполнения массива _friends для объекта person.
Возвращает объект person с заполненными Name, Friends и функцией FillFriends, которая заполнит входные данные в свойстве Friends.

*/

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// Просто присваиваем _friends передаваемых в качестве массива в fillFriends
var Person = function () {
    var person = {
        _name: "Leroy",
        _friends: [],
        fillFriends(f) { this._friends = f }
    }
    return person;
}



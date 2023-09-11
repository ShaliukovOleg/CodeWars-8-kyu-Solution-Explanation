/*

We want to create a constructor function 'NameMe', 
which takes first name and last name as parameters. 
The function combines the first and last names and saves the value in "name" property.

We already implemented that function, but when we actually run the code, 
the "name" property is accessible, but the "firstName" and "lastName" is not accessible. 
All the properties should be accessible. 
Can you find what's wrong with it? A test fixture is also available

*/

/*

Мы хотим создать функцию-конструктор 'NameMe', 
которая принимает в качестве параметров имя и фамилию. 
Функция объединяет имя и фамилию, затем сохраняет значение в свойстве "name".

Мы уже реализовали эту функцию, но когда мы запускаем код, 
свойство "name" доступно, но свойства "firstName" и "lastName" недоступны. 
Все свойства должны быть доступны. 
Можете ли вы найти, что здесь не так?

*/

// Проблема заключается в том, что функция возвращает объект с единственным свойством 'name'
// Это приводит к потере свойств 'firstName' и 'lastName'
// В данном случае просто убираем возврат объекта и просто инициализируем this.name.

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}

// Либо это можно сделать через шаблонные литералы для большей наглядности

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = `${this.firstName} ${this.lastName}`;
}

// Или все прописать в один объект

function NameMe(first, last) {
    return {
        firstName: first,
        lastName: last,
        name: first + ' ' + last
    }
}


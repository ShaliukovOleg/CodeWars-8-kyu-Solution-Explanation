/*

Teach snoopy and scooby doo how to bark using object methods. 
Currently only snoopy can bark and not scooby doo.
Use method prototypes to enable all Dogs to bark.

*/

/*

Научите Снупи и Скуби Ду лаять, используя методы объектов. 
В настоящее время лаять может только Снупи, но не Скуби Ду.
Используйте прототипы методов, чтобы все собаки могли лаять.

*/

/*
snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
*/

// Согласно условию, мы просто заменяем строку snoopy и, 
// устанавливаем в прототип возможность лая для каждой собаки
function Dog(breed) {
    this.breed = breed;
}

Dog.prototype.bark = function () {
    return "Woof";
};

var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");

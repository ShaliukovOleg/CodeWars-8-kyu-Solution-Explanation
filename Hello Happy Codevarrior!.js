/*

VVhat ?!?
None of zese codevarriors seemz to remember hiz ovvn name !
Kould you help ?

*/

/*

Что?!?
Похоже, никто из этих воинов не помнит его имени!
Не могли бы вы помочь?

*/

/*

var albert = new Warrior("Al")
var boris  = new Warrior("Boris")
albert.toString() --> "Hi! my name's Boris" <-- ohoh..

*/

// Просто изменить строку с именем объявив её с помощью let 
function Warrior(n) {
    let name = n;
    this.name = function (n) {
        if (n) name = n;
        return name;
    }
}

Warrior.prototype.toString = function () {
    return "Hi! my name's " + this.name();
}


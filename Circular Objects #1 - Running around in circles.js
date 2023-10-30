// Solution / Решение

class Circular {
    constructor() { // Конструктор
        this.value = "Hello World"; // Устанавливаем свойство "value" объекта согласно заданию 
        this.self = this; // Устанавливаем свойство "self" объекта равным самому объекту
    }
};

circular = new Circular(); // Создание экземпляра класса Circular и присвоение его переменной "circular"

// Short version

const circular = { value: "Hello World" };
circular.self = circular;

/*

Circular Objects #1 - Running around in circles
Overview
A circular object is any object containing a property that refers to itself. 
An example of a circular object can be found right here at 
Codewars - the very programming environment that they provide you with. 
Just try it - print the details of the current programming environment to the console 
(I will not be giving you any hints - you'll have to figure this out yourself) 
and scroll through the printed text until you find a property named global. 
As you would expect, the printed output would say that it is [circular]. 
Now let's try printing the global property of the programming envoronment to the console. 

What do you see? 
If you followed the instructions properly you would see the exact same thing being printed out! 

Impressed? 
You can test this further by then printing the global property of the global property 
of the current environment to the console and you would still see the exact same thing being printed. 
In fact, no matter how many levels you go "inside" the object, 
you would still see the exact same thing being printed out.

Which leads us to the task described below ...

Task
Define a circular object circular such that the following are true:

circular.value === "Hello World"
circular === circular.self
circular.self === circular.self.self
... and so on.

NOTE: The code above is pseudocode. 
If you actually tested your circular object like this with equality or identity operators, 
it would not work as object literals do not have an intrinsic value.

Articles of Interest
Unfortunately, in this Kata, 
any article I recommend to you would immediately give away the solution so I have decided to not recommend any articles in this Kata of the series. 
I apologise for any inconvenience caused.

*/

/*

Круговые объекты №1 - Бег по кругу
Обзор
Круговой объект - это любой объект, содержащий свойство, которое ссылается само на себя. 
Пример кругового объекта можно найти прямо здесь, на сайте 
Codewars - в той самой среде программирования, которую они вам предоставляют. 
Просто попробуйте - выведите на консоль данные о текущей среде программирования 
(я не буду давать вам подсказки - вам придется догадаться об этом самостоятельно) 
и прокрутите выведенный текст до тех пор, пока не найдете свойство global. 
Как и следовало ожидать, в распечатанном тексте будет сказано, что это [circular]. 
Теперь попробуем вывести на консоль свойство global среды программирования. 

Что вы увидите? 
Если бы вы правильно выполнили инструкцию, то увидели бы точно такое же сообщение! 

Впечатлило? 
Вы можете проверить это дальше, напечатав глобальное свойство глобального свойства 
текущего окружения в консоль, и вы увидите точно такое же сообщение. 
Более того, независимо от того, на сколько уровней вы перейдете "внутрь" объекта, 
все равно будет выведено точно такое же сообщение.

Это приводит нас к решению задачи, описанной ниже...

Задача
Определите круглый объект circular так, чтобы выполнялись следующие условия:

circular.value === "Hello World"
circular === circular.self
circular.self === circular.self.self
... и так далее.

ПРИМЕЧАНИЕ: Приведенный выше код является псевдокодом. 
Если бы вы действительно проверяли свой круговой объект подобным образом с помощью операторов равенства или тождества, 
это не сработает, поскольку объектные литералы не имеют собственного значения.

Интересные статьи
К сожалению, в этом Ката, 
любая статья, которую я вам порекомендую, сразу же выдаст решение, поэтому я решил не рекомендовать никаких статей в этой Ката серии. 
Приношу извинения за причиненные неудобства.

*/
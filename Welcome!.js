// Solution / Решение

function greet(language) {
    // Создаем базу данных приветствий на разных языках
    const greetingsDatabase = {
        "english": "Welcome",
        "czech": "Vitejte",
        "danish": "Velkomst",
        "dutch": "Welkom",
        "estonian": "Tere tulemast",
        "finnish": "Tervetuloa",
        "flemish": "Welgekomen",
        "french": "Bienvenue",
        "german": "Willkommen",
        "irish": "Failte",
        "italian": "Benvenuto",
        "latvian": "Gaidits",
        "lithuanian": "Laukiamas",
        "polish": "Witamy",
        "spanish": "Bienvenido",
        "swedish": "Valkommen",
        "welsh": "Croeso",
    };

    // Проверяем, есть ли язык в базе данных, и возвращаем приветствие
    return language in greetingsDatabase ? greetingsDatabase[language] : greetingsDatabase["english"];
}

// Tests

console.log(greet('english'));
console.log(greet('dutch'));

/*

Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. 
Marketing thinks it would be great to welcome visitors to the site in their own language. 
Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language', with a type String, 
and returns a greeting - if you have it in your database. 
It should default to English if the language is not in the database, or in the event of an invalid input.

The Database
[ ("english", "Welcome")
, ("czech", "Vitejte")
, ("danish", "Velkomst")
, ("dutch", "Welkom")
, ("estonian", "Tere tulemast")
, ("finnish", "Tervetuloa")
, ("flemish", "Welgekomen")
, ("french", "Bienvenue")
, ("german", "Willkommen")
, ("irish", "Failte")
, ("italian", "Benvenuto")
, ("latvian", "Gaidits")
, ("lithuanian", "Laukiamas")
, ("polish", "Witamy")
, ("spanish", "Bienvenido")
, ("swedish", "Valkommen")
, ("welsh", "Croeso")
]

Possible invalid inputs include:

IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was supplied

*/

/*

Бакалавр вашей компании сообщил отделу маркетинга, что ваш сайт имеет большую аудиторию в Скандинавии и близлежащих странах. 
Маркетинг считает, что было бы здорово приветствовать посетителей сайта на их родном языке. 
К счастью, вы уже используете API, определяющий местоположение пользователя, так что это легкая победа.

Задача
Придумайте способ хранения языков в базе данных. Языки перечислены ниже, поэтому их можно скопировать и вставить!
Напишите функцию 'welcome', которая принимает параметр 'language' с типом String, 
и возвращает приветствие - если оно есть в вашей базе данных. 
Если язык отсутствует в базе данных, или в случае некорректного ввода, то по умолчанию будет возвращаться английский язык.

База данных
[ ("english", "Welcome")
, ("czech", "Vitejte")
, ("danish", "Velkomst")
, ("dutch", "Welkom")
, ("estonian", "Tere tulemast")
, ("finnish", "Tervetuloa")
, ("flemish", "Welgekomen")
, ("french", "Bienvenue")
, ("german", "Willkommen")
, ("irish", "Failte")
, ("italian", "Benvenuto")
, ("latvian", "Gaidits")
, ("lithuanian", "Laukiamas")
, ("polish", "Witamy")
, ("spanish", "Bienvenido")
, ("swedish", "Valkommen")
, ("welsh", "Croeso")
]

Возможные недействительные вводы включают:

IP_ADDRESS_INVALID - не является действительным ip-адресом ipv4 или ipv6
IP_ADDRESS_NOT_FOUND - ip-адрес отсутствует в базе данных
IP_ADDRESS_REQUIRED - не указан ip-адрес

*/
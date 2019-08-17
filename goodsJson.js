//{
//    name: "Вася",       // ошибка: ключ name без кавычек!
//        "surname": 'Петров',// ошибка: одинарные кавычки у значения 'Петров'!
//    "age": 35,           // .. а тут всё в порядке.
//    "isAdmin": false    // и тут тоже всё ок
//}

//создаем Json объект, который описывает параметры товаров
let goods = {

    "items": [
        {"id": "0", "name": "Cross training", "price": "400", "discont": "5"},
        {"id": "1", "name": "Cross running", "price": "340", "discont": "15"},
        {"id": "2", "name": "Cross walking", "price": "300", "discont": "20"}
    ]
}

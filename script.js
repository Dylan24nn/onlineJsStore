let goodsNumber = 0;
let wishNumber = 0;

function updateCartNumber(n) {
    $(".cartLink").html("cart shop <span>(" + n + ")</span>");
}

function updateWishListNumber(n) {
    $(".wishListLink").html("wishlist <span>(" + n + ")</span>");
}


$(function () {
//Отображаем по умолчание 0 товаров
    updateCartNumber(goodsNumber);
    updateWishListNumber(wishNumber);
//Добавить обработчики click на кнопке add
    $(".addBtn").click(function () {

//Выделяем кнопки на которые кликаем и меняем на них текст с add на in cart
        $(this).addClass("greenBg");
        $(this).text("in cart");
        $(this).attr("disabled", true);
//Отображение количества товаров в корзине
        goodsNumber++;
        updateCartNumber(goodsNumber);

    });

    $(".addWbtn").click(function () {

//Выделяем кнопки на которые кликаем и меняем на них текст с add на in cart
        $(this).addClass("yellowBg");
        $(this).text("in wishlist");
        $(this).attr("disabled", true);
//Отображение количества товаров в корзине
        wishNumber++;
        updateWishListNumber(wishNumber);

    });


    //обработчик кнопки очистки корзины
    $("#reset").click(function () {
        goodsNumber = 0;
        updateCartNumber(0);

        $(".addBtn").addClass("paletBg"); //добавляет класс paletBg всем кнопкам с классом addBtn
        $(".addBtn").text("add"); //меняет текст кнопок с классом addBtn
        $(".addBtn").attr("disabled", false); // меняет состояние кнопки в активное

    });

    $("#resetWishList").click(function () {
        wishNumber = 0;
        updateWishListNumber(0);

        $(".addWbtn").addClass("brownBg"); //добавляет класс paletBg всем кнопкам с классом addBtn
        $(".addWbtn").text("wish"); //меняет текст кнопок с классом addBtn
        $(".addWbtn").attr("disabled", false); // меняет состояние кнопки в активное

    });
});

//setCookie("test", "test2", 7);
//console.log(getCookie("test"));
//получение стоимости по Id товара
function getPriceById(id) {
    return goods.items[id].price;
}
let itemId = 2;
let priceId = getPriceById(itemId);
//console.log(priceId);


function getNameById(id) {
    return goods.items[id].name;
}
let itemId2 = 2;
let name = getNameById(itemId2);
//console.log(name);

setCookie("firstItem", "0", 7);
setCookie("secondItem", "1", 7);
setCookie("thirdItem", "2", 7);


let sum = parseInt(getPriceById(getCookie("firstItem"))) +
    parseInt(getPriceById(getCookie("secondItem"))) +
    parseInt(getPriceById(getCookie("thirdItem")));

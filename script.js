let goodsNumber = 0;
let wishNumber = 0;

function updateCartNumber(n) {
    $(".cartLink").html("cart shop <span>(" + n + ")</span>");
}

function updateWishListNumber(n) {
    $(".wishListLink").html("wishlist <span>(" + n + ")</span>");
}

$(function () {
    //создаем куку в которой будут храниться id товаров
    //если она еще не создана
    setGoodsCookie();
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
        //дописываем Id товара в куки (ДОБАВИТЬ ПРОВЕРКУ НА ДУБЛИКАТЫ ТОВАРОВ)
        let itemId = $(this).data("itemId");
        let goodsIdCookie = getCookie("goodsId");
        setCookie("goodsId", goodsIdCookie + "," + itemId);
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
    //Проходим по всем кнопкам добавить в корзину и с помощью
    //Jquery метода .data() добавляем соответсвующие Id

    let itemIdCounter = 0;
    $( "button.addBtn" ).each(function( index ) {
       $(this).data("itemId", itemIdCounter++)
    });
});



//setCookie("test", "test2", 7);
//console.log(getCookie("test"));
//получение стоимости по Id товара

let goodsId = getCookie("goodsId");
console.log(goodsId);




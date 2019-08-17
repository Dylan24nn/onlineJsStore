function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//function getPriceById(id) {
//    return goods.items[id].price;
//}
//let itemId = 2;
//let priceId = getPriceById(itemId);
//console.log(priceId);


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}

function setGoodsCookie() {
    if (getCookie("goodsId") == "") {
        setCookie("goodsId", "-1", 7);
    }
}

function getPriceById(id) {
    return goods.items[id].price;
}

function getNameById(id) {
    return goods.items[id].name;
}

function getNameById2(id) {
    return goods.items[id].name;
}

let goodsId = getCookie("goodsId");
let listId = goodsId.split(",");
for(let i = 1; i < listId.length; i++){
    let itemId = parseInt(listId[i]);
    let nameItem = getNameById2(itemId);
    //console.log(nameItem);
    document.getElementById("goodsList").innerHTML += nameItem;
}
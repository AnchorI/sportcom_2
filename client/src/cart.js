let cart = {};

// perebor massiva, add-to-cart nazvanie classa
document.querySelectorAll('.add-to-cart').forEach(function (element){
        element.onclick = addToCart;
})

function addToCart(){
    let goodsId = this.dataset.goods_id; //goodsId v html id tovara
    if (cart[goodsId]) {
        cart[goodsId]++;
    }
    else {
        cart[goodsId] = 1;
    }
    console.log(cart);
    ajaxGetGoodsInfo();
}

function ajaxGetGoodsInfo(){
    fetch('/cart',{
        method: 'POST',
        body: JSON.stringify({key: Object.keys(cart)}),
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        }
    })
        .then(function (response){

        })
        .then(function (body){
            console.log(body);
        })
}


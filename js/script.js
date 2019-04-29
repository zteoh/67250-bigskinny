function MinusQuantity() {
    var productQty = document.getElementById("productQuantity");
    if (productQty.value > 1) {
        productQty.value --;
    }
}

function AddQuantity() {
    var productQty = document.getElementById("productQuantity");
    productQty.value ++;
}

$('#shop').onclick = function() {
    console.log("CLCI")
    $('#screen').show()
}
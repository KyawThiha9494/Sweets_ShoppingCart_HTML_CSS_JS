var total = 30;

function updateCart(){
    var item1Unit = 0;
    var item2Unit = 0;
    if(document.getElementById("qtyitem1")){
        item1Unit = document.getElementById("qtyitem1").value;
    }
    if(document.getElementById("qtyitem2")){
        item2Unit = document.getElementById("qtyitem2").value;
    }

    var amount1 = item1Unit * 10;
    var amount2 = item2Unit * 20;

    total = amount1 + amount2;

    if(document.getElementById("sweetAmount")){
        document.getElementById("sweetAmount").innerHTML = "$" + amount1;
    }
    if(document.getElementById("cakeAmount")){
        document.getElementById("cakeAmount").innerHTML = "$" + amount2;
    }

    document.getElementById("subtotal").innerHTML = "$" + total;
    document.getElementById("total").innerHTML = "$" + total;

}

function remove_item(rowID)
{
    document.getElementById("myTable").deleteRow(document.getElementById(rowID).rowIndex);
    updateCart();
}

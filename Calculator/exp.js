function myfunction() {
    var var1 = parseInt(document.getElementById("first").value);
    var var2 = parseInt(document.getElementById("second").value);
    var var3 = var1 ** var2;
    document.getElementById("third").value = var3;
}
var num = 0;
var num1 = num2 = 0;
var digit = 0;
var op = "";
var temp = "";
var res = 0;
var fun = "";
function number(obj) {
    digit = Number(obj.value);
    num = num * 10 + digit;
    document.getElementById("display").innerHTML = temp + num;
}
function cleardisplay() {
    document.getElementById("display").innerHTML = "0";
    num = 0;
    num1 = num2 = 0;
    digit = 0;
    op = "";
    temp = "";
    fun = "";
}
function operation(obj) {
    if (num1 == 0)
        num1 = num;
    else
        num2 = num;
    num = 0;
    document.getElementById("display").innerHTML += " ";
    switch (obj.value) {
        case "+": document.getElementById("display").innerHTML += "+ "; break;
        case "-": document.getElementById("display").innerHTML += "- "; break;
        case "*": document.getElementById("display").innerHTML += "* "; break;
        case "/": document.getElementById("display").innerHTML += "/ "; break;
        case "%": document.getElementById("display").innerHTML += "% "; break;
        case "**": document.getElementById("display").innerHTML += "^ "; break;
        default: break;
    }
    op = obj.value;
    temp = document.getElementById("display").innerHTML;
}
function equal() {
    document.getElementById("display").innerHTML += " = ";
    num2 = num;
    switch (op) {
        case "+": res = num1 + num2; break;
        case "-": res = num1 - num2; break;
        case "*": res = num1 * num2; break;
        case "/": res = num1 / num2; break;
        case "%": res = num1 % num2; break;
        case "**": res = num1 ** num2; break;
        default: break;
    }
    document.getElementById("display").innerHTML += res;
}

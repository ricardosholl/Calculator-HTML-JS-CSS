function exibirNumero0() {
  var numero = document.getElementById("mostrarExpressao");
  numero.value += "0";
}
function exibirNumero1() {
  var numero = document.getElementById("mostrarExpressao");
  numero.value += "1";
}
function exibirNumero2() {
  var numero = document.getElementById("mostrarExpressao");
  numero.value += "2";
}
function exibirNumero3() {
  var numero = document.getElementById("mostrarExpressao");
  numero.value += "3";
}
function exibirNumero4() {
  var numero = document.getElementById("mostrarExpressao");
  numero.value += "4";
}
function exibirNumero5() {
  var numero = document.getElementById("mostrarExpressao");
  numero.value += "5";
}
function exibirNumero6() {
  var numero = document.getElementById("mostrarExpressao");
  numero.value += "6";
}
function exibirNumero7() {
  var numero = document.getElementById("mostrarExpressao");
  numero.value += "7";
}
function exibirNumero8() {
  var numero = document.getElementById("mostrarExpressao");
  numero.value += "8";
}
function exibirNumero9() {
  var numero = document.getElementById("mostrarExpressao");
  numero.value += "9";
}
function add() {
  var numero = document.getElementById("mostrarExpressao");
  numero.value += "+";
}
function subtract() {
  var numero = document.getElementById("mostrarExpressao");
  numero.value += "-";
}
function divide() {
  var numero = document.getElementById("mostrarExpressao");
  numero.value += "/";
}
function multiply() {
  var numero = document.getElementById("mostrarExpressao");
  numero.value += "*";
}
function resultado() {
  var valores = document.getElementById("mostrarExpressao").value;
  var calculo = eval(valores);
  document.getElementById("historico").value = valores;
  document.getElementById("calculo").value = calculo;
}

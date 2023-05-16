function exibirNumero(novoNumero) {
  var numero = document.getElementById("mostrarExpressao");
  numero.value += novoNumero;
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

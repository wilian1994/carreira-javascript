
var frase = $(".frase").text();

console.log(frase);

var palavras = frase.split(" ").length;

console.log(palavras);

var tamFrase = $("#tamanho-frase").text(palavras);

var frase = $(".frase").text();

console.log(frase);

var palavras = frase.split(" ").length;

console.log(palavras);

var tamFrase = $("#tamanho-frase").text(palavras);

var campo = $(".campo-digitacao");

campo.on("input", function(){
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    $("#contador-caracteres").text(conteudo.length);
})

var tempoDigitacao = $("#tempo-digitacao").text();

campo.one("focus", function(){

    var intervalo = setInterval(function(){
        tempoDigitacao--;
        $("#tempo-digitacao").text(tempoDigitacao);

        if(tempoDigitacao < 1){
            campo.attr("disabled", true);
            clearInterval(intervalo);
        }
    }, 1000)
});

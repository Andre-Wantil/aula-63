"use strict";
// ex 1
let fatos = "Typescript é incrivel";
let verdade = 42;
let bolando = true;
// ex 2
function soma(a, b) {
    return a + b;
}
console.log(soma(3, 5));
// ex 3
let numeroOuNull = 57;
function numbOuNull(input) {
    if (input) {
        return input;
    }
    else {
        return "Sem valor";
    }
}
console.log(numbOuNull(numeroOuNull));
// ex 4
function verificarMaiorIdade(input) {
    if (input >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(verificarMaiorIdade(17));
// ex 5
function saudacao(input) {
    return `Olá ${input}`;
}
console.log(saudacao("Ademilriçon"));
// ex 6
function calcularAreaCirculo(input) {
    return Math.PI * input ^ 2;
}
console.log(5);
// ex 7
function formatarTexto(input, maiuscula) {
    if (maiuscula) {
        return input.toUpperCase();
    }
    else {
        return input;
    }
}
console.log(formatarTexto("Eu tô gritando?", true));
// ex 8
let undefinedOuString = undefined;
function undfOuStr(input) {
    if (input) {
        return input;
    }
    else {
        return "Valor ausente";
    }
}
console.log(undfOuStr(undefinedOuString));
// ex 9
function converterPraNumero(input) {
    if (parseInt(input)) {
        return parseInt(input);
    }
    else {
        return NaN;
    }
}
console.log(converterPraNumero("a"));

// ex 1
let fatos:string = "Typescript é incrivel";
let verdade:number = 42;
let bolando:boolean = true;

// ex 2
function soma(a:number, b:number):number {
    return a + b
}
console.log(soma(3, 5))

// ex 3
let numeroOuNull:number|null = 57
function numbOuNull(input:number|null):number|string {
    if (input) {
        return input
    } else {
        return "Sem valor"
    }
}
console.log(numbOuNull(numeroOuNull))

// ex 4
function verificarMaiorIdade(input:number):boolean {
    if (input >= 18) {
        return true
    } else {
        return false
    }
}
console.log(verificarMaiorIdade(17))

// ex 5
function saudacao(input:string):string {
    return `Olá ${input}`
}
console.log(saudacao("Ademilriçon"))

// ex 6
function calcularAreaCirculo(input:number):number {
    return Math.PI * input^2
}
console.log(5)

// ex 7
function formatarTexto(input:string, maiuscula?:boolean):string {
    if (maiuscula) {
        return input.toUpperCase()
    } else {
        return input
    }
}
console.log(formatarTexto("Eu tô gritando?", true))

// ex 8
let undefinedOuString:undefined|string = undefined

function undfOuStr(input:undefined|string):string {
    if (input) {
        return input
    } else {
        return "Valor ausente"
    }
}
console.log(undfOuStr(undefinedOuString))

// ex 9
function converterPraNumero(input:string):number {
    if (parseInt(input)) {
        return parseInt(input)
    } else {
        return NaN
    }
}
console.log(converterPraNumero("a"))
let abc: string = "teste";

console.log(abc);

function somar(a: number, b: number): number {
    return a + b;
}

console.log(somar(5, 2));

interface Umano {
    nome: string,
    idade: number
}

let aluno:Umano = {
    nome: "Abrisdalbiçon",
    idade: 15
}
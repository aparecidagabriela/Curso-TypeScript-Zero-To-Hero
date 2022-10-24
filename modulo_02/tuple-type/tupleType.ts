/**
 * arquivo: tupleType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Tuple'
 * data: 28/03/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * aluna: Gabriela Sousa
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// Exemplo 01 - Uso simples de Tuplas em TypeScript

let pessoa: [string, string, number];
pessoa = ['Gabriela Sousa', 'Backend Developer JavaScript', 21];
// pessoa = [21, 'Backend Developer JavaScript', 'Gabriela Sousa'];

console.log(pessoa);

// Exemplo 02 - Acessando o valor da Tupla

let pessoa1: [string, string, number];
pessoa1 = ['Gabriela Sousa', 'Backend Developer JavaScript', 21];

console.log(pessoa1[1]);

// Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
let pessoa2: [nome: string, posicao: string, idade: number] = ['Gabriela Sousa', 'Backend Developer JavaScript', 21];

console.log(pessoa2);


// Exemplo 04 - Usando Tuplas com Spread Operator

let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);

// Exemplo 05 - Lista Heterogênea de Tupla:

let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

// Exemplo 06 - Uso de função com Tuplas

function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
}

let resultado = listarPessoas(['Gabriela', 'Glaucia'], [21, 34]);
console.log(resultado)

// Exemplo 07 - Labeled Tuples com Spread Operator numa função

type Nome = 
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return [...nome];
}

console.log(criarPessoa('Gabriela', 'Sousa'));
console.log(criarPessoa('Gabriela', 'de Sousa', 'Santos'));
/* eslint-disable prettier/prettier */
/**
 * arquivo: function.ts
 * descrição: arquivo responsável por ensinar como usar o functions no Typescript
 * data: 14/02/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * aluna: Gabriela Sousa
 */

export {};

 // Exemplo 01 - Functions (Named function)
function somarNumeros(num1: number, num2: number): number {
  return num1 + num2;
}

const resultado = somarNumeros(2, 2);
console.log(resultado);

// Exemplo 02 - Função Anônima (Function Expression)
const saudar = function(mensagem: string) {
  return mensagem;
};

console.log(saudar('Olá, developers!'));

// Exemplo 03 - (Arrow Function Expression)
const saudar03 = (mensagem: string) => {
  return mensagem;
};

console.log(saudar03('Fala, pessoal!'));

// Exemplo 04 - (Function Constructor)
const saudar04 = new Function('mensagem', 'return "Fala, " + mensagem');

console.log(saudar04('Galera!'));


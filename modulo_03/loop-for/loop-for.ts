/* eslint-disable prettier/prettier */
/**
 * arquivo: loop-for.ts
 * descrição: arquivo responsável por ensinar como usar o loop for no Typescript
 * data: 23/01/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * aluna: Gabriela Sousa
 */

//  Exemplo 01: loop for

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Exemplo 02: for ..of (retorna uma coleção de matriz, lista ou tupla)

const arrayNumeros = [10, 20, 30, 40, 50];

for (const i of arrayNumeros) {
  console.log(i);
}

// Exemplo 03: for ...in - ()

const arrayNumeros01 = [5, 4, 3, 2, 1, 0]

for (const i in arrayNumeros01) {
  console.log(i);
}

// sort()
const ordemNumerica: number[] = arrayNumeros01.sort();
console.log(ordemNumerica);

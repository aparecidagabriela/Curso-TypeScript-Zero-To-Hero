"use strict";
/* eslint-disable prettier/prettier */
/**
 * arquivo: typeAnnotation.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Type Annotation'
 * data: 16/02/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * aluna: Gabriela Sousa
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// Variáveis [Type Annotation]
let nome = 'Gabriela Sousa';
console.log(nome);
// Arrays [Type Annotation]
let animais = ['Elefante', 'Girafa', 'Camelo', 'Pássaro'];
console.log(animais);
// Objetos [Type Annotation]
let carro;
carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preço: 80000 };
console.log(carro);
// Functions [Type Annotation]
function multiplicarNumeros(num1, num2) {
    return num1 * num2;
}
console.log(multiplicarNumeros(2, 5));

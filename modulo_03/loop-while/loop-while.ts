/* eslint-disable prettier/prettier */
/**
 * arquivo: loop-while.ts
 * descrição: arquivo responsável por ensinar como usar o loop for no Typescript
 * data: 23/01/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * aluna: Gabriela Sousa
 */

// Exemplo 01 - while
let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}

// Exemplo 02
let numero =1;

while (numero <= 20) {
  if (numero % 5 == 0) {
    console.log('O primeiro número múltiplo de 5 entre 1 a 20 é:', numero);
    break
  }
  numero++
}

// Exemplo 03 - exemplo mais prático
let contadorUsuario = 0;
const usuario: string[] = ['Gabriela', 'Lucas', 'Vanessa'];

while(usuario[contadorUsuario]) {

  console.log('Usuário:', usuario[contadorUsuario]);
  contadorUsuario++;
}

// Exemplo 04 - do...while
let contador01 = 0;

do {
  console.log(contador01);
  contador01++
} while (contador01 < 5);
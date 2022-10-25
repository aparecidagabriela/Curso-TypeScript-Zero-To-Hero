/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/**
 * arquivo: optionalParameters.ts
 * descrição: arquivo responsável por ensinar como usar o
 * 'Optional Parameters' em funções no no Typescript
 * data: 14/02/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export {};

 // Exemplo 01 - Optional Parameter
function informarDadosPessoa(idPessoa: number, nome: string, email?: string) {
  console.log('Id Funcionário:', idPessoa, 'Nome:', nome);
  
  if(email != undefined) console.log('Email:', email);
}

informarDadosPessoa(775544, 'Gabriela Sousa');
informarDadosPessoa(994411, 'Glaucia Lemos', 'glaucia@exemplo.com.br');

// Exemplo 02
function mensagemLog(mensagem: string, usuarioId?: number){
  const horaLog = new Date().toLocaleDateString();

  console.log(horaLog, mensagem, usuarioId || 'Usuário(a) não conectado(a)');
}

  mensagemLog('Atualizar Página');
  mensagemLog('Usuário(a) logado(a) com sucesso', 778811);

// Exemplo 03

type Pessoa = {
  idFuncionario: number;
  nome: string;
  idade?: number;
  email?: string;
};

let pessoa: Pessoa

pessoa = {
  idFuncionario: 112233,
  nome: 'Gabriela Sousa'
}

console.log(pessoa);

"use strict";

var usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: 'Rio',
    estado: 'SC'
  }
};
console.log(usuario);
var nome1 = usuario.nome;
var idade1 = usuario.idade;
var cidade1 = usuario.endereco.cidade;
console.log(nome1);
console.log(idade1);
console.log(cidade1);
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log('nome ', nome);
console.log('idade', idade);
console.log('cidade', cidade);

function monstraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log('nome ', nome);
  console.log('idade', idade);
}

monstraNome(usuario);

"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idadeMap = usuarios.map(function (item) {
  return item.idade;
});
console.log(idadeMap);
var usuarioFilter = usuarios.filter(function (item) {
  return item.empresa === 'Rocketseat' && item.idade > 18;
});
console.log(usuarioFilter);
var googleFind = usuarios.find(function (item) {
  return item.empresa = 'Google';
});
console.log(googleFind);

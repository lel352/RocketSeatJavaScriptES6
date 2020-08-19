"use strict";

var arr = [2, 4, 6, 7, 8]; //função anonima

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); // mesmo que anterior mas reduzida como é função anonima e sem nome pode se fazer assim

var newArr2 = arr.map(function (item) {
  return item * 2;
});
console.log(newArr2); //quando a function só recebe o um parâmetro pode se remover os Parênteses

var newArr3 = arr.map(function (item) {
  return item * 2;
});
console.log(newArr3); //quando a function tem retorno simples de uma informação, como abaixo pode diminuir ela ainda mais 

var newArr4 = arr.map(function (item) {
  return item * 2;
});
console.log(newArr4); // somente para explificar, não é recomendado fazer isso

var teste = function teste() {
  return 'teste';
};

console.log(teste());

var teste2 = function teste2() {
  return [1, 2, 3];
}; //pode isso


teste2 = function teste2() {
  return 'teste';
}; //pode isso


teste2 = function teste2() {
  return 2;
}; //pode isso


var teste3 = function teste3() {
  nome: 'Teste 1';
}; //não pode isso pois chaves são para function, ele não entende que é um objeto


var teste4 = function teste4() {
  return {
    nome: 'Teste 1'
  };
}; //Parênteses por fora ele entende que é um objeto


console.log(teste4());

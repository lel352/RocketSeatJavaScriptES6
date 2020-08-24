//Converta as funções nos seguintes trechos de código em Arrow Functions:
//3.1
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map(function (item) {
    return item + 10;
});

console.log(arr2);

const arr3 = arr.map(item => item + 10);

console.log(arr3);

// 3.2
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
    return usuario.idade;
}

console.log(mostraIdade(usuario));

const mostraIdade2 = usuario => usuario.idade;

console.log(mostraIdade2(usuario));


// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

const mostraUsuario2 = (nome = 'Diego', idade = 18) => ({nome,  idade}); //Parênteses por fora ele entende que é um objeto
console.log(mostraUsuario2(nome, idade));
console.log(mostraUsuario2(nome));

// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   }

const promise = () => new Promise( (resolve, reject) => resolve());   


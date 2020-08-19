const arr = [2, 4, 6, 7, 8]


//função anonima
const newArr = arr.map(function(item){
    return item * 2;
});

console.log(newArr);

// mesmo que anterior mas reduzida como é função anonima e sem nome pode se fazer assim
const newArr2 = arr.map((item) => {
    return item * 2
});

console.log(newArr2);

//quando a function só recebe o um parâmetro pode se remover os Parênteses
const newArr3 = arr.map(item => {
    return item * 2
});

console.log(newArr3);

//quando a function tem retorno simples de uma informação, como abaixo pode diminuir ela ainda mais 
const newArr4 = arr.map(item => item * 2);

console.log(newArr4);

// somente para explificar, não é recomendado fazer isso
const teste = () => {
    return 'teste';
}

console.log(teste());

let teste2 = () => [1, 2, 3]; //pode isso
teste2 = () => 'teste'; //pode isso
teste2 = () => 2; //pode isso

const teste3 = () => {nome:'Teste 1'}; //não pode isso pois chaves são para function, ele não entende que é um objeto

const teste4 = () => ({nome:'Teste 1'}); //Parênteses por fora ele entende que é um objeto
console.log(teste4());
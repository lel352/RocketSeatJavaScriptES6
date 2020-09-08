// Rest
const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'RocketSeat'
};

const { nome, ...resto} = usuario;

console.log(nome);
console.log(resto); // vira um array


const arr = [1, 2, 3, 4];

const [a , b,  ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params){
    return params.reduce( (total, next) => total + next);
}

console.log(soma(1,2,4))

function soma2(a, b, ...params){
    return a + b + params.reduce( (total, next) => total + next);
}

console.log(soma2(1 , 2, 4));
console.log(soma2(1 , 2, 4, 4));


//SPREAD

const arra = [1, 2, 3, 4];
const arra2 = [5, 6, 7, 8];

const arra3 = [...arra, ...arra2];

console.log(arra3);


const usuario1 = {
    nome: 'Diego',
    idade: 23, 
    empresa: 'Rockeseat'
};

//Copia todas as propriedades só munda o que deseja
const usuario2 = {...usuario1, nome: 'Teste'};

console.log(usuario2);
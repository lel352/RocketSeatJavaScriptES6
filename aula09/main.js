const usuario = {
    nome:  "Diego",
    idade: 23,
    endereco: {
        cidade: 'Rio',
        estado: 'SC',
    }, 
};

console.log(usuario)
const nome1 = usuario.nome;
const idade1 = usuario.idade;
const cidade1 = usuario.endereco.cidade;
console.log(nome1);
console.log(idade1);
console.log(cidade1);


const {nome, idade, endereco: {cidade}} = usuario;


console.log('nome ',nome);
console.log('idade',idade);
console.log('cidade',cidade);


function monstraNome({nome, idade}){
    console.log('nome ',nome);
    console.log('idade',idade);
}

monstraNome(usuario);
//sintaxe Curta de objeto
const nome = 'Diego';
const idade = 23;

const usuario = {
     nome: nome,
     idade: idade,
     empresa: 'Rocketseat',   
};

console.log(usuario);

//como o nome do atributo é igual da variavel pegou o valor e dela
const usuario2 = {
    nome,
    idade,
    empresa: 'RocketSeat',
}

console.log(usuario2);
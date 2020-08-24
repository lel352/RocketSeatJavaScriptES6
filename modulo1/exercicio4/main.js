//4.1 Desestruturação simples

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};


const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

//4.2 Desestruturação em parâmetros

function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }))

function mostraInfo2({nome, idade} = usuario) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo2({ nome: 'Diego', idade: 23 }))  

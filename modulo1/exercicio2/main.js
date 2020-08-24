const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
  
const idadeMap = usuarios.map(item => item.idade);
console.log(idadeMap);

const usuarioFilter = usuarios.filter(item => (item.empresa === 'Rocketseat' && item.idade > 18));
console.log(usuarioFilter); 

const googleFind = usuarios.find(item => item.empresa === 'Google');
console.log(googleFind);

const idadeFilter = (usuarios.map(item => ({...item, idade: item.idade * 2}))).filter(item => (item.idade <= 50));
console.log(idadeFilter); 
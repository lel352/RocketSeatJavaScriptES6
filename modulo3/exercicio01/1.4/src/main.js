import axios from 'axios';

/*
const buscaUsuario = usuario => {
 axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 });
}
buscaUsuario('diego3g');*/

const buscaUsuarioAsync = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (error) {
        console.log('Usuário não existe');
    }
}

buscaUsuarioAsync('diego3g');

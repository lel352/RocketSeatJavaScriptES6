const a = 1;

// a = 3; // isso da erro const é somente leitura

const usuario = {nome: 'Diego' };

usuario.nome = 'Cleiton'; 
//mutação é possivel dentro de um objeto dentro da constante

console.log(usuario.nome); // 

function teste(x){
    let y = 2;

    if (x > 5 ){ // outro escopo, diferente do teste {}
        let y = 4;
        console.log(x, y);
    }
}
//{} da nome de escopo, quando abre uma chave e fecha é um escopo

teste(10);
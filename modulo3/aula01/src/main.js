const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('ok') }, 2000);
});
/*
Forma anterior
minhaPromise()
    .then(response => {
        console.log(response);
    })
    .catch(err => {

    });
*/

async function execultaPromise(){ // só pode usar wait dentro de um funcao async
    const response = await minhaPromise();
    console.log('ok 1'+response);

    console.log(await minhaPromise()); // Essa linha só vai executar quando a primeira terminar
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}    

execultaPromise();
    
// Arrow function
const execultaPromise2 = async () =>{ 
    console.log(await minhaPromise());
    console.log(await minhaPromise());  // Essa linha só vai executar quando a anterior  terminar
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

execultaPromise2();

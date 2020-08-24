const arr = [1, 3, 4, 5, 6, 8, 9];

const newArr = arr.map(function(item){ //map percorre cada item do vertor
    return item * 2;
});

console.log(newArr);


const newArr2 = arr.map(function(item, index){ //map percorre cada item do vertor
    return item + index;
});

console.log(newArr2);

// total vai receber o valor do return, e next o valor dentro do array 1ª = (0, 1) 2ª = (1, 3) 3ª = (4, 4) ... 
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

// filtrar item se for true ele vai para o novo arrray
const filter = arr.filter(function(item){
    return item % 2 === 0; 
});

console.log(filter);

const find = arr.find(function(item){
    return item === 4;
});

console.log(find); // se achou vai retornar o numero informado

const find2 = arr.find(function(item){
    return item === 2;
});

console.log(find2); // Se não achou retorna undefined  
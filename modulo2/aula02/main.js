    import {soma, sub, soma as soma3Funciton } from './funcoes'; // as permite mudar o nome da function quando ela não usa o default 
import soma2, {sub2} from './soma';
import soma2Funciton from './soma'; //Posso mudar para o nome que quiser devido ao default na original
import * as funcoes from './funcoes';

console.log(soma(1,2));
console.log(sub(1,2));
console.log(soma2(1,4));
console.log(soma2Funciton(1,4));
console.log(soma3Funciton(7,4));
console.log(sub2(1,2));

console.log(funcoes.div(2, 1));
console.log(funcoes.multi(2, 2));
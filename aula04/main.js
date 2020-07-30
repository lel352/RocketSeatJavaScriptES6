class matematica {
    static soma(a, b){
        return a + b;
    }
}

console.log(matematica.soma(2,4));


class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.todos);
    }
}
/*
class TodoList{
    constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push('Novo Todo');
        console.log(this.todos);
    }
}*/

class TodoList extends List(){
    constructor(){
        super();

        this.usuario = 'Teste';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}


var minhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function(){
    //minhaLista.addTodo();
    minhaLista.add('Novo todo');
}

minhaLista.mostraUsuario();
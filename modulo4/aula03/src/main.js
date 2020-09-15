class App {
    constructor() {
        this.repositores = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();
        this.repositores.push({
            name: 'rocketseat.com.br',
            description: 'Tire a sua ideia do papel e dê vida à sua starup.',
            avatar_url: 'https://github.githubassets.com/images/modules/open_graph/github-mark.png',
            html_url: 'https://github.com/rocketseat',
        });

        this.render();
    }

    render() {
        this.listEl.innerHTML = '';
        this.repositores.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);
            
            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blank');
            linkEl.setAttribute('href', repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();
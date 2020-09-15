class App {
    constructor() {
        this.repositores = [];

        this.formEl = document.getElementById('repo-form');

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

        console.log(this.repositores);
    }
}

new App();
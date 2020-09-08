import axios from 'axios';

/*
class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Repositório não existe');
            })
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');*/

class Github {
    static async getRepositoriesAsync(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (error) {
            console.log('Repositório não existe');
        }
    }
}
Github.getRepositoriesAsync('rocketseat/rocketseat.com.br');
Github.getRepositoriesAsync('rocketseat/dslkvmskv');

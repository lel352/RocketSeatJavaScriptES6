import axios from 'axios';

class Api {
    static async getUserInfor(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (error) {
            console.log('Erro na Api');
        }
    }
}

Api.getUserInfor('lel352');
Api.getUserInfor('diego3asdadasdg');

import enums from '../CurrentFilm.enums';
let instance = null;

class CurrentFilmService {

    constructor(){
        if(!instance){
            instance = this;
        }

        return instance;
    }

    update(updates) {
        return {
            update: enums.UPDATE,
            updates
        }
    };
}

const currentFilmService = new CurrentFilmService();

export default currentFilmService;
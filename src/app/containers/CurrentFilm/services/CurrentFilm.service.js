import enums from '../CurrentFilm.enums';
let instance = null;
import {store} from '../../../../index';

class CurrentFilmService {

    constructor(){
        if(!instance){
            instance = this;
        }

        return instance;
    }

    setCurrentFilm (name) {

        const filmsList = store.getState().filmsReducer.filmsList;
        const currentFilm = filmsList.filter((film) => film.title == name)[0];


        return {
            type: enums.GET_CURRENT_FILM,
            currentFilm
        }

    };

    update(updates) {
        return {
            update: enums.UPDATE,
            updates
        }
    };
}

const currentFilmService = new CurrentFilmService();

export default currentFilmService;
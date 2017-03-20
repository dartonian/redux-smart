import enums from './CurrentFilm.enums';

function currentFilmReducer (state = enums.initialState, action) {

    switch(action.type) {

        case enums.UPDATE:
            return {
                ...state
            };

        case enums.REQUEST_VIDEOS:
            return Object.assign({},state, {
                waiting: true
            });

        case enums.LOAD_VIDEOS:
            return Object.assign({},state, {
                waiting: false,
                film: action.film
            });

        default:
            return state;
    }
}

export default currentFilmReducer;
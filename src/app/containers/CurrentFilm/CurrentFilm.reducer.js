import enums from './CurrentFilm.enums';

function currentFilmReducer (state = enums.initialState, action) {

    switch(action.type) {

        case enums.UPDATE:
            return {
                ...state
            };

        case enums.GET_CURRENT_FILM:
            return {
                ...state,
                currentFilm: action.currentFilm
            };

        default:
            return state;
    }
}

export default currentFilmReducer;
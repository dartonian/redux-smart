import enums from './CurrentFilm.enums';

function currentFilmReducer (state = enums.initialState, action) {

    switch(action.type) {

        case enums.UPDATE:
            return {
                ...state
            };

        default:
            return state;
    }
}

export default currentFilmReducer;
import enums from './Films.enums';

function filmsReducer (state = enums.initialState, action) {

    switch(action.type) {

        case enums.UPDATE:
            return {
                ...state
            };

        default:
            return state;
    }
}

export default filmsReducer;
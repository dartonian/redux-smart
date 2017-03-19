import enums from './Films.enums';

function filmsReducer (state = enums.initialState, action) {

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
                filmsList: action.filmsList
            });

        default:
            return state;
    }
}

export default filmsReducer;
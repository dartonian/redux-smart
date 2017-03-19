import enums from './Serials.enums';

function serialsReducer (state = enums.initialState, action) {

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
                serialsList: action.serialsList
            });

        default:
            return state;
    }
}

export default serialsReducer;
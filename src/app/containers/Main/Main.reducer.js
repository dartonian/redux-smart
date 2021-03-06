import enums from './Main.enums';

function mainReducer (state = enums.initialState, action) {

    switch(action.type) {

        case enums.UPDATE:
            return {
                ...state
            };

        default:
            return state;
    }
}

export default mainReducer;
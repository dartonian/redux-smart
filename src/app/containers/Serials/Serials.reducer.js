import enums from './Serials.enums';

function serialsReducer (state = enums.initialState, action) {

    switch(action.type) {

        case enums.UPDATE:
            return {
                ...state
            };

        default:
            return state;
    }
}

export default serialsReducer;
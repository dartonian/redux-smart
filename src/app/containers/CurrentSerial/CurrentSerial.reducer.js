import enums from './CurrentSerial.enums';

function currentSerialReducer (state = enums.initialState, action) {

    switch(action.type) {

        case enums.UPDATE:
            return {
                ...state,
                ...action.updateList
            };

        case enums.GET_CURRENT_SERIAL:
            return {
                ...state,
                currentSerial: action.currentSerial
            };

        default:
            return state;
    }
}

export default currentSerialReducer;
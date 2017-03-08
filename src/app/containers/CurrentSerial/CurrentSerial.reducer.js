import enums from './CurrentSerial.enums';

function currentSerialReducer (state = enums.initialState, action) {

    switch(action.type) {

        case enums.UPDATE:
            return {
                ...state
            };

        default:
            return state;
    }
}

export default currentSerialReducer;
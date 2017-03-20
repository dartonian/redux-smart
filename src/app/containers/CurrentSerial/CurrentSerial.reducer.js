import enums from './CurrentSerial.enums';

function currentSerialReducer (state = enums.initialState, action) {

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
                serial: action.serial
            });

        default:
            return state;
    }
}

export default currentSerialReducer;
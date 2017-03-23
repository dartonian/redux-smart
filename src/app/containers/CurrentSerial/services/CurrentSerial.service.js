import enums from '../CurrentSerial.enums';
import {store} from '../../../../index';
let instance = null;

class CurrentSerialService {

    constructor(){
        if(!instance){
            instance = this;
        }

        return instance;
    }

    update(updates) {
        return {
            update: enums.UPDATE,
            updates
        }
    };

    setCurrentSerial (name) {

        const serialList = store.getState().serialsReducer.serialsList;
        const currentSerial = serialList.filter((serial) => serial.title == name)[0];

        return {
            type: enums.GET_CURRENT_SERIAL,
            currentSerial
        }

    };
}

const currentSerialService = new CurrentSerialService();

export default currentSerialService;
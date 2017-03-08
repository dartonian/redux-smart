import enums from '../CurrentSerial.enums';
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
}

const currentSerialService = new CurrentSerialService();

export default currentSerialService;
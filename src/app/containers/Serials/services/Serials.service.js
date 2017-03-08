import enums from '../Serials.enums';
let instance = null;

class SerialsService {

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

const serialsService = new SerialsService();

export default serialsService;
import enums from '../Main.enums';
let instance = null;

class MainService {

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

const mainService = new MainService();

export default mainService;
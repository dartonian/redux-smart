import enums from '../Films.enums';
let instance = null;

class FilmsService {

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

const filmsService = new FilmsService();

export default filmsService;
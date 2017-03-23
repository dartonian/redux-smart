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

    _get(theUrl, callback) {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        };
        xmlHttp.open('GET', theUrl, true); // true for asynchronous
        xmlHttp.send(null);
    }

    requestVideos() {
        return {
            type: enums.REQUEST_VIDEOS
        };
    }

    receiveVideos(res) {
        return {
            type: enums.LOAD_VIDEOS,
            serialsList: res.serials.map(serial => ({
                title: serial.title,
                url: serial.url,
                seasons: serial.seasons
            }))
        };
    }


    fetchVideos =()=> {
        return dispatch => {
            dispatch(this.requestVideos());
            return this._get('/api/serials',(res)=>{
                dispatch(this.receiveVideos(JSON.parse(res)));
            });
            //.then(res => res.json())
            //.then(json => dispatch(this.receiveVideos(json)))
        }
    }
}

const serialsService = new SerialsService();

export default serialsService;
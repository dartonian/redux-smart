import enums from '../CurrentFilm.enums';
let instance = null;

class CurrentFilmService {

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
            film: res.film
        };
    }


    fetchVideos =(name)=> {
        return dispatch => {
            dispatch(this.requestVideos(name));
            return this._get(`/api/film${name}`,(res)=>{
                dispatch(this.receiveVideos(JSON.parse(res)));
            });
            //.then(res => res.json())
            //.then(json => dispatch(this.receiveVideos(json)))
        }
    }
}

const currentFilmService = new CurrentFilmService();

export default currentFilmService;
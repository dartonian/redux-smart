import enums from '../Films.enums';
let instance = null;

export class FilmsService {

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

    log(){
        console.log('success');
    }

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
            filmsList: res.films.map(film => ({
                title: film.title,
                url: film.url
            }))
        };
    }


    fetchVideos =()=> {
        return dispatch => {
            dispatch(this.requestVideos());
            return this._get('/api/films',(res)=>{
                dispatch(this.receiveVideos(JSON.parse(res)));
            });
            //.then(res => res.json())
            //.then(json => dispatch(this.receiveVideos(json)))
        }
    }

}

const filmsService = new FilmsService();

export default filmsService;
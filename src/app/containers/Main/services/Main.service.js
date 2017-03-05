import enums from '../Main.enums';
let instance = null;

class MainService {

    constructor(){
        if(!instance){
            instance = this;
        }

        return instance;
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

    resetVideo() {
      return {
          type: enums.RESET_VIDEO
      }
    };

    playVideo (video) {
        return {
            type: enums.PLAY_VIDEO,
            video
        };
    };

    requestVideos() {
        return {
            type: enums.REQUEST_VIDEOS
        };
    }

    receiveVideos(res) {
        return {
            type: enums.LOAD_VIDEOS,
            videos: res
        };
    }


    fetchVideos =()=> {
      return dispatch => {
        dispatch(this.requestVideos());
        return this._get('/api/list',(res)=>{
            dispatch(this.receiveVideos(JSON.parse(res)));
        });
          //.then(res => res.json())
          //.then(json => dispatch(this.receiveVideos(json)))
      }
    }
}

const mainService = new MainService();

export default mainService;
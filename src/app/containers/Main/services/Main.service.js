import enums from '../Main.enums';
let instance = null;

class MainService {

    constructor(){
        if(!instance){
            instance = this;
        }

        return instance;
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

    selectVideo =(video)=> {
        return dispatch => {
            dispatch(this.resetVideo());
            setTimeout(()=>{
                dispatch(this.playVideo(video));
            },1);
        };
    };

    requestVideos() {
        return {
            type: enums.REQUEST_VIDEOS
        };
    }

    receiveVideos(json) {
        return {
            type: enums.LOAD_VIDEOS,
            videos: json
        };
    }


    fetchVideos =()=> {
      return dispatch => {
        dispatch(this.requestVideos());
        return fetch('/api/list')
          .then(res => res.json())
          .then(json => dispatch(this.receiveVideos(json)))
      }
    }
}

const mainService = new MainService();

export default mainService;
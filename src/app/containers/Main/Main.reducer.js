import enums from './Main.enums';

function mainReducer (state = enums.initialState, action) {

    switch(action.type) {

        case enums.PLAY_VIDEO:
            return {
                ...state,
                video: action.video,
                remove: false
            };

        case enums.RESET_VIDEO:
            console.log('reset');
            return {
                ...state,
                remove: true
            };

        case enums.REQUEST_VIDEOS:
            return Object.assign({},state, {
                waiting: true
            });

        case enums.LOAD_VIDEOS:
            return Object.assign({},state, {
                waiting: false,
                videos: action.videos
            });

        default:
            return state;
    }
}

export default mainReducer;
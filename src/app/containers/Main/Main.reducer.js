import enums from './Main.enums';

function mainReducer (state = enums.initialState, action) {

    switch(action.type) {
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
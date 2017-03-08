import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import mainReducer from './app/containers/Main/Main.reducer';
import serialsReducer from './app/containers/Serials/Serials.reducer';
import filmsReducer from './app/containers/Films/Films.reducer';
import currentFilmsReducer from './app/containers/CurrentFilm/CurrentFilm.reducer';
import currentSerialReducer from './app/containers/CurrentSerial/CurrentSerial.reducer';

const rootReducer = combineReducers({
    mainReducer,
    serialsReducer,
    filmsReducer,
    currentFilmsReducer,
    currentSerialReducer,
    routing: routerReducer
});

export default rootReducer;
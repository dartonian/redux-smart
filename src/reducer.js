import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import mainReducer from './app/containers/Main/Main.reducer';

const rootReducer = combineReducers({
  mainReducer,
  routing: routerReducer
});

export default rootReducer;
import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

/*export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
*/
export default function configureStore(initialState) {
	const store = createStore(rootReducer, initialState, compose(
			applyMiddleware(thunk)
		)
	);
	return store;
}
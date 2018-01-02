import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {autoRehydrate} from 'redux-persist'
import reducers from '../reducers'

export default () => {
	const enhancer = process.env.NODE_ENV === 'production' ? compose(
		autoRehydrate()
	) : compose(
		autoRehydrate(),
		applyMiddleware(require('redux-logger').default) // Only include redux-logger if we are in development
	);
	const reducer = combineReducers(reducers);
	const initialStore = {};

	const store = createStore(reducer, initialStore, enhancer);

	if(module.hot) {
	    // Enable webpack hot module replacement for reducers
		module.hot.accept(
			'reducers',
			() => store.replaceReducer(require('reducers').default)
		);
	}
	return store;
}

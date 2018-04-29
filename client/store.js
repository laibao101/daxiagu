import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router-dom';

import rootReducer from './reducers/index';


const defaultState = {
	comments: [],
	posts: []
}

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f=>f,
);

const store = createStore(rootReducer,applyMiddleware(thunk));

if (module.hot) {
	module.hot.accept('./reducers/',()=>{
		const nextRootReducer = require('./reducers/index.js').default;
		store.replaceReducer(nextRootReducer);
	})
}

export default store;

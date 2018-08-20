import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = compose;
const reduxEnhancers = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, reduxEnhancers);

export default store;
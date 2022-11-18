import {legacy_createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

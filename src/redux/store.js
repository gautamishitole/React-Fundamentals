import {legacy_createStore} from 'redux';
import reducer from './reducers/index';


const store = legacy_createStore(reducer, {}, window.__REDUX_DEVTOOL_EXTENSION && window.__REDUX_DEVTOOL_EXTENSION__());

export default store;

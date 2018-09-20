import { createStore } from 'redux';
import appReducer from '../reducers';

export default (initialState={}) => {
	return createStore(appReducer, initialState)
};
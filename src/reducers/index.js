import items from './items';
import modalActive from './modalActive';
import date from './date';
import name from './name';
import { combineReducers } from 'redux';

export default combineReducers({
    items,
    modalActive,
    date,
    name  
  });
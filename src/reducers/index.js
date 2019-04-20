import { combineReducers } from 'redux';
import searchStore from './searchStore';
import hotelStore from './hotelStore';

export default combineReducers({
    searchStore, hotelStore
});

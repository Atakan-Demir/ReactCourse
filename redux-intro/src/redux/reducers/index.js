import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

//elimizde bulunan reducer'ları bir araya getirip birleştiren fonksiyon
const reducers = combineReducers({

    counterReducer // counterReducer: counterReducer

})

export default reducers;
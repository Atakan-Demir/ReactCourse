import { combineReducers } from 'redux';
import changeCategoryReducer from './changeCategoryReducer';

const rootReducer = combineReducers({
    changeCategoryReducer // changeCategoryReducer:changeCategoryReducer (key ve value aynıysa birini yazmak yeterli)
});

export default rootReducer;
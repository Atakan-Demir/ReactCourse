import { combineReducers } from 'redux';
import changeCategoryReducer from './changeCategoryReducer';
import categoryListReducer from './categoryListReducer';

const rootReducer = combineReducers({
    changeCategoryReducer, // changeCategoryReducer:changeCategoryReducer (key ve value aynıysa birini yazmak yeterli)
    categoryListReducer
});

export default rootReducer;
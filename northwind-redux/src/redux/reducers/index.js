import { combineReducers } from 'redux';
import changeCategoryReducer from './changeCategoryReducer';
import categoryListReducer from './categoryListReducer';
import productListReducer from './productListReducer';
import cartReducer from './cartReducer';
import saveProductReducer from './saveProductReducer';

const rootReducer = combineReducers({
    changeCategoryReducer, // changeCategoryReducer:changeCategoryReducer (key ve value aynıysa birini yazmak yeterli)
    categoryListReducer,
    productListReducer,
    cartReducer,
    saveProductReducer
});

export default rootReducer;
import * as actionTypes from '../actions/actionTypes';
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            var addedItem = state.find(c => c.product.id === action.payload.product.id);
            if (addedItem) {
                var newState = state.map(cartItem => {
                    if (cartItem.product.id === action.payload.product.id) {
                        //Object.assign() metodu, bir veya birden fazla kaynaktan hedefe kopyalama işlemi yapar.
                        return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 })

                    }
                    return cartItem;
                })
                return newState;
            } else {
                // State'in bir kopyasını al ve action ile gelen payload'ı ekleyip yeni bir array oluştur
                return [...state, { ...action.payload }]
            }

        default:
            return state;
    }
}
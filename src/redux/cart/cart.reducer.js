import { CartTypeAction } from "./cart.type";
import { addItemToCart } from "./cart.utils";


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypeAction.ADD_ITEM:
            const newCartItems = addItemToCart(state.cartItems, action.payload);
            return {
                ...state,
                cartItems: newCartItems
            }
        case CartTypeAction.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
};

export default cartReducer;
import { CartTypeAction } from "./cart.type";
import { addItemToCart, decreaseItem, increateItem } from "./cart.utils";


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
        case CartTypeAction.CLEAR_ITEM_FROM_CART: {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => {
                    console.log(" item.id: ", item.id)
                    console.log(" payload.id: ", action.payload.id);
                    return item.id !== action.payload.id
                })
            }
        }
        case CartTypeAction.INCREASE_ITEM: {
            return {
                ...state,
                cartItems: increateItem(state.cartItems, action.payload)
            }
        }
        case CartTypeAction.DECREASE_ITEM: {
            return {
                ...state,
                cartItems: decreaseItem(state.cartItems, action.payload)
            }
        }
        default:
            return state;
    }
};

export default cartReducer;
import { CartTypeAction } from "./cart.type";

export const toggleCartHidden = () => ({
    type: CartTypeAction.TOGGLE_CART
})
export const addItem = (item) => ({
    type: CartTypeAction.ADD_ITEM,
    payload: item
})
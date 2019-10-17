import { CartTypeAction } from "./cart.type";

export const toggleCartHidden = () => ({
    type: CartTypeAction.TOGGLE_CART
})
export const addItem = (item) => ({
    type: CartTypeAction.ADD_ITEM,
    payload: item
})
export const clearItemFromCart = (item) => ({
    type: CartTypeAction.CLEAR_ITEM_FROM_CART,
    payload: item
})
export const decreaseItem = (item) => ({
    type: CartTypeAction.DECREASE_ITEM,
    payload: item
})
export const increaseItem = (item) => ({
    type: CartTypeAction.INCREASE_ITEM,
    payload: item
})
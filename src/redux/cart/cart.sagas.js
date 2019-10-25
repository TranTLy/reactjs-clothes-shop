import { userTypeAction } from "../user/user.type";
import { put, call, all, takeLatest } from 'redux-saga/effects'
import { clearCart } from "./cart.actions";

export function* onClearCart() {
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest(userTypeAction.SIGN_OUT_SUCCESS, onClearCart)
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}
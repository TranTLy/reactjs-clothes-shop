import { userTypeAction } from "./user.type";


export const setUserAction = user => ({
    type: userTypeAction.SET_USER,
    payload: user
});

export const googleSignInStart = () => ({
    type: userTypeAction.GOOGLE_SIGN_IN_START
})
export const emailSignInStart = (emailAndPassword) => ({
    type: userTypeAction.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})
export const signInSuccess = (user) => ({
    type: userTypeAction.SIGN_IN_SUCCESS,
    payload: user
})
export const signInFailure = (errorMessage) => ({
    type: userTypeAction.SIGN_IN_FAILURE,
    payload: errorMessage
})
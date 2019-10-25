import { userTypeAction } from "./user.type";

export const checkUserSession = () => ({
    type: userTypeAction.CHECK_USER_SESSION
})

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


export const signOutStart = () => ({
    type: userTypeAction.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: userTypeAction.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: userTypeAction.SIGN_OUT_FAILURE,
    payload: error
})


export const signupStart = ({ email, password, displayName }) => ({
    type: userTypeAction.SIGN_UP_START,
    payload: { email, password, displayName }
})

export const signupSuccess = ({ user, otherData }) => ({
    type: userTypeAction.SIGN_UP_SUCCESS,
    payload: { user, otherData }
})

export const signupFailure = (error) => ({
    type: userTypeAction.SIGN_UP_FAILURE,
    payload: error
})
import { takeLatest, all, call, put } from 'redux-saga/effects';
import { userTypeAction } from './user.type';
import { auth, createUserInDB, googleProvider, getCurrentUser } from '../../firebase/firebase.util';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signupFailure, signupSuccess } from './user.actions';

export function* getSnapshotFromUserAuth(user, otherData) {
    try {
        const userRef = yield call(createUserInDB, user, otherData);
        const snapshot = yield userRef.get();
        yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

export function* signInWithGoogle() {
    const { user } = yield auth.signInWithPopup(googleProvider);
    // const userRef = yield call(createUserInDB, user);
    yield getSnapshotFromUserAuth(user);

}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
    console.log("payload signInWithEmailAndPassword: ", email, " - ", password);
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    // const userRef = yield call(getUserRef, user.uid);
    // console.log("user - email: ", user);
    yield getSnapshotFromUserAuth(user);
}

export function* isUserAuthenticated() {
    console.log("On isUserAuthenticated");
    try {
        const userAuth = yield getCurrentUser();
        console.log("user auth: ", userAuth)

        if (!userAuth) return;

        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error.message));
    }
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        let { user } = yield auth.createUserWithEmailAndPassword(email, password);
        // console.log("sign up:", user);
        // yield createUserInDB(user, { displayName });
        yield put(signupSuccess({ user, otherData: { displayName } }));
    } catch (error) {
        yield put(signupFailure(error.message));
    }
}

export function* signInAfterSignUp({ payload: { user, otherData } }) {
    yield getSnapshotFromUserAuth(user, otherData);
}

export function* onGoogleSignIn() {
    yield takeLatest(userTypeAction.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailAndPasswordSignIn() {
    // console.log("email  - pass sign in start");
    yield takeLatest(userTypeAction.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

export function* onCheckUserSession() {
    // console.log("in sagas: CHECK_USER_SESSION")
    yield takeLatest(userTypeAction.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOutStart() {
    yield takeLatest(userTypeAction.SIGN_OUT_START, signOut)
}

export function* signUpStart() {
    yield takeLatest(userTypeAction.SIGN_UP_START, signUp)
}

export function* onSignupSuccess() {
    yield takeLatest(userTypeAction.SIGN_UP_SUCCESS, signInAfterSignUp);
}



export function* userSagas() {
    yield all([
        call(onGoogleSignIn),
        call(onEmailAndPasswordSignIn),
        call(onCheckUserSession),
        call(signOutStart),
        call(signUpStart),
        call(onSignupSuccess)
    ])
}
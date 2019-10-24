import { takeLatest, all, call, put } from 'redux-saga/effects';
import { userTypeAction } from './user.type';
import { auth, createUserInDB, googleProvider, getCurrentUser } from '../../firebase/firebase.util';
import { signInSuccess, signInFailure } from './user.actions';

export function* getSnapshotFromUserAuth(user) {
    try {
        const userRef = yield call(createUserInDB, user);
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
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    // const userRef = yield call(getUserRef, user.uid);
    // console.log("user - email: ", user);
    yield getSnapshotFromUserAuth(user);
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        console.log("user auth: ", userAuth)

        if (!userAuth) return;

        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}


export function* onGoogleSignIn() {
    yield takeLatest(userTypeAction.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailAndPasswordSignIn() {
    console.log("email  - pass sign in start");
    yield takeLatest(userTypeAction.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

export function* onCheckUserSession() {
    yield takeLatest(userTypeAction.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas() {
    yield all([call(onGoogleSignIn), call(onEmailAndPasswordSignIn), call(onCheckUserSession)])
}
import { takeLatest, all, call, put } from 'redux-saga/effects';
import { userTypeAction } from './user.type';
import { auth, createUserInDB, getUserRef, googleProvider } from '../../firebase/firebase.util';
import { signInSuccess, signInFailure } from './user.actions';

export function* getSnapshotFromUserRef(userRef) {
    try {
        const snapshot = yield userRef.get();
        yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

export function* signInWithGoogle() {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserInDB, user);
    yield getSnapshotFromUserRef(userRef);

}

export function* onGoogleSignIn() {
    yield takeLatest(userTypeAction.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(getUserRef, user.uid);
    yield getSnapshotFromUserRef(userRef);
}

export function* onEmailAndPasswordSignIn() {
    console.log("email  - pass sign in start");
    yield takeLatest(userTypeAction.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

export function* userSagas() {
    yield all([call(onGoogleSignIn), call(onEmailAndPasswordSignIn)])
}
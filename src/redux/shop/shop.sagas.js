import { takeLatest, call, put } from 'redux-saga/effects';
import { ShopActionType } from './shop.type';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.action';
import { convertCollectionSnapshotToMap } from '../../firebase/firebase.util';
import { firestore } from '../../firebase/firebase.util';

function* fetchCollectionAsync() {
    yield console.log("Sagas is fired");
    try {
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionData = yield call(convertCollectionSnapshotToMap, snapShot);
        yield put(fetchCollectionSuccess(collectionData));
    } catch (err) { yield put(fetchCollectionFailure(err.message)) };
}

export function* fetchCollectionStart() {
    yield takeLatest(ShopActionType.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}
import { ShopActionType } from "./shop.type";

export const fetchCollectionStart = () => ({
    type: ShopActionType.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = (collections) => ({
    type: ShopActionType.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
});
export const fetchCollectionFailure = (err) => ({
    type: ShopActionType.FETCH_COLLECTIONS_FAILURE,
    payload: err
});

// // using redux-thunk
// export const fetchCollectionStartAsync = () => {
//     return dispatch => {
//         // console.log("on asynch fetching ");
//         const collectionRef = firestore.collection('collections');
//         dispatch(fetchCollectionStart());
//         collectionRef.get().then(snapShot => {
//             const collectionData = convertCollectionSnapshotToMap(snapShot);
//             // console.log("on snap shot data: ", collectionData);
//             dispatch(fetchCollectionSuccess(collectionData));
//         }).catch(err => dispatch(fetchCollectionFailure(err.message)));
//     }
// }
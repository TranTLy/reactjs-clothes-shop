import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAzIwxRCFzn2Mt9_9o6hpkyBoAyNWowLBI",
    authDomain: "clothes-shop-ac1a3.firebaseapp.com",
    databaseURL: "https://clothes-shop-ac1a3.firebaseio.com",
    projectId: "clothes-shop-ac1a3",
    storageBucket: "",
    messagingSenderId: "975711812464",
    appId: "1:975711812464:web:87ddcc46d49d6638792db5",
    measurementId: "G-GSPSE05RYE"
}

export const createUserInDB = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log('user auth: ', userAuth);
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        console.log("data in util: ", {
            displayName, email, createAt, ...additionalData
        });

        try {
            await userRef.set({
                displayName, email, createAt, ...additionalData
            });
        } catch (err) {
            console.log("Create user err: ", err);
        }
    }
    return userRef;
}

export const addCollectionAndDocuments = (key, collectionArr) => {
    const ref = firestore.collection(key);
    const batch = firestore.batch();
    console.log("on add collection to firebase");
    collectionArr.forEach(obj => {
        const newDocRef = ref.doc();
        batch.set(newDocRef, obj);
    });
    batch.commit();
}

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    console.log("transformedCollection: ", transformedCollection)
    return transformedCollection.reduce((accumulator, item) => {
        accumulator[item.routeName] = item;
        return accumulator;
    }, {});
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            console.log(" util, user auth: ", userAuth);
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

// export const getUserRef = (id) => firestore.doc(`users/${id}`);
firebase.initializeApp(config);
export const auth = firebase.auth();


export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
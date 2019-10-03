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

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithGoogle();

export default firebase;
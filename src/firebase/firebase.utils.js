import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDRsKkuGCyM1zva7Hn7W1Z7bYEtURu1Jx0",
    authDomain: "crwn-db-15c85.firebaseapp.com",
    databaseURL: "https://crwn-db-15c85.firebaseio.com",
    projectId: "crwn-db-15c85",
    storageBucket: "crwn-db-15c85.appspot.com",
    messagingSenderId: "547418523679",
    appId: "1:547418523679:web:fa8429ec43482ac25dad2a",
    measurementId: "G-5JSD3GXTPJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// new Google authentication class from auth library 
const provider = new firebase.auth.GoogleAuthProvider();


// this new class takes some custom parameters
provider.setCustomParameters({ prompt: 'select_account' });

// create a function to sign in with pop up on google account (provider)
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyB4B0gCRv-OzPH265v3gg8Uyxxw8K0xU4U",
    authDomain: "crown-db-9e3c4.firebaseapp.com",
    projectId: "crown-db-9e3c4",
    storageBucket: "crown-db-9e3c4.appspot.com",
    messagingSenderId: "923327425142",
    appId: "1:923327425142:web:45877258c41868ae478d57"
};

export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = userRef.get();

    if(!snapshot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user',error.message);
        }

    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
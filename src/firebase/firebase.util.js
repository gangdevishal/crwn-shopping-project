import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLBX0ofW6hzBYdZfS27M5oFOHG-UMywWM",
  authDomain: "crwn-shopping-app-21d88.firebaseapp.com",
  projectId: "crwn-shopping-app-21d88",
  storageBucket: "crwn-shopping-app-21d88.appspot.com",
  messagingSenderId: "156165538899",
  appId: "1:156165538899:web:36c1893bebfd16e874f2a6",
  measurementId: "G-CH5EJXFDBV",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = fireStore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const {  email } = userAuth;
    console.log(email);
    const createdAt = new Date();
    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

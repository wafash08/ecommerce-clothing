import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyzkkqaVcNsCyDztzJeU5uTPNIjQJy6iM",
  authDomain: "e-commerce-clothing-eb749.firebaseapp.com",
  projectId: "e-commerce-clothing-eb749",
  storageBucket: "e-commerce-clothing-eb749.appspot.com",
  messagingSenderId: "1099488422231",
  appId: "1:1099488422231:web:90e4fe6c2e874cbc46b612",
  measurementId: "G-Z58H86521P",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

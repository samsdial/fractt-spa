import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const config = {
  apiKey: "AIzaSyDRrRUvPQT_v8CDSurCbyQpjt4UKfohzIs",
  authDomain: "fb-spapp.firebaseapp.com",
  projectId: "fb-spapp",
  storageBucket: "fb-spapp.appspot.com",
  messagingSenderId: "724529338126",
  appId: "1:724529338126:web:eccb7f17a45368fceea95f",
  measurementId: "G-1DEBDCH7VR",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.ts"
    );
  } else {
    return config;
  }
}

const app = initializeApp(getFirebaseConfig());
const auth = getAuth(app);

export const signInUser = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const userStateListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDRrRUvPQT_v8CDSurCbyQpjt4UKfohzIs",
  authDomain: "fb-spapp.firebaseapp.com",
  projectId: "fb-spapp",
  storageBucket: "fb-spapp.appspot.com",
  messagingSenderId: "724529338126",
  appId: "1:724529338126:web:eccb7f17a45368fceea95f",
  measurementId: "G-1DEBDCH7VR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

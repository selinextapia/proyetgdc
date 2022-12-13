import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBqrCOQO8c_gqZk6ss7H1t45Pe-zsYJ8sw",
  authDomain: "proyecto-finall.firebaseapp.com",
  projectId: "proyecto-finall",
  storageBucket: "proyecto-finall.appspot.com",
  messagingSenderId: "422522905641",
  appId: "1:422522905641:web:483da31907588ce20f2838"
};

initializeApp(firebaseConfig);
export const storage = getStorage();
export const firestore = getFirestore();
export const auth = getAuth();

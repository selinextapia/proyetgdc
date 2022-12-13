import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBqrCOQO8c_gqZk6ss7H1t45Pe-zsYJ8sw",
    authDomain: "proyecto-finall.firebaseapp.com",
    projectId: "proyecto-finall",
    storageBucket: "proyecto-finall.appspot.com",
    messagingSenderId: "422522905641",
    appId: "1:422522905641:web:483da31907588ce20f2838"
  };

firebase.initializeApp(firebaseConfig);

export const baseDeDato = firebase.firestore();
export default firebase;

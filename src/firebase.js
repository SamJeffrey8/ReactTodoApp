import firebase from "firebase";


const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyD50J4HQEfA7mLTiKjZMIYwitBQIan0V_s",
    authDomain: "beautycare-dd12b.firebaseapp.com",
    databaseURL: "https://beautycare-dd12b.firebaseio.com",
    projectId: "beautycare-dd12b",
    storageBucket: "beautycare-dd12b.appspot.com",
    messagingSenderId: "1045403578976",
    appId: "1:1045403578976:web:fb1f79590515fbee8ac905",
    measurementId: "G-JWV10MPG42"
});

const db = firebaseapp.firestore();

export default db;    
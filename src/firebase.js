// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//import firebase from "firebase/app";
//import 'firebase/database';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBPzNFZkrAWIXGeIkkRi1BJo5v-KRHNYPY",
    authDomain: "linkdin-yt-clone-jeet.firebaseapp.com",
    projectId: "linkdin-yt-clone-jeet",
    storageBucket: "linkdin-yt-clone-jeet.appspot.com",
    messagingSenderId: "18801998211",
    appId: "1:18801998211:web:f2d7e0234c83c83ac45eb6",
    measurementId: "G-V7Z43JW678"
  };

  //const firestore = getFirestore();

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
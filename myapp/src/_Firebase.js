import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//  import { getFirestore, collection, addDoc, getDocs } from "@firebase/firestore/compat";
const firebaseConfig = {
    apiKey: "AIzaSyBPMexPTruWARC6rtoiAujHtfaXYLaYZtg",
    authDomain: "netflix-clone-5be9f.firebaseapp.com",
    projectId: "netflix-clone-5be9f",
    storageBucket: "netflix-clone-5be9f.appspot.com",
    messagingSenderId: "124797017633",
    appId: "1:124797017633:web:c78f0de8a8060914e9cd60",
    measurementId: "G-EKWX062P41"
  };
  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth = firebase.auth();
  export const database=firebase.getFirestore();
  export const addDoc=firebase.addDoc();
  export const collection=firebase.collection();
  export {auth};
  export default db;
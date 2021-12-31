import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  export {auth};
  export default db;
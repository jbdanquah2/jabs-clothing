import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyAHT_-IL58mZ194mBpi5D73je_t7wufgIU",
    authDomain: "jabs-clothing-db.firebaseapp.com",
    projectId: "jabs-clothing-db",
    storageBucket: "jabs-clothing-db.appspot.com",
    messagingSenderId: "303389489083",
    appId: "1:303389489083:web:afcb609018c2e2169c369e",
    measurementId: "G-56GXJNSE4E"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;
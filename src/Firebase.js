import firebase from 'firebase';

const firerbaseAp = firebase.initialized ({
  apiKey: "AIzaSyDrDcypuooy409xbYODF-RuC0-lukXsh6U",
    authDomain: "chatapp-4454f.firebaseapp.com",
    projectId: "chatapp-4454f",
    storageBucket: "chatapp-4454f.appspot.com",
    messagingSenderId: "23985746781",
    appId: "1:23985746781:web:99689b0c18eee9bab02eb4",
    measurementId: "G-RWY2E514SE"
});

 
const db = firerbaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
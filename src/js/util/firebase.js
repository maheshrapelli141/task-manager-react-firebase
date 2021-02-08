import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBRru4VvLFM84S1HyrAa5KRkqlXMnsFYzA",
  authDomain: "task-manager-16905.firebaseapp.com",
  projectId: "task-manager-16905",
  storageBucket: "task-manager-16905.appspot.com",
  messagingSenderId: "840501959599",
  appId: "1:840501959599:web:bfe6f9e51cc93ffe3f6d5a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth();

export {
  firebase,
  provider,
  auth
}

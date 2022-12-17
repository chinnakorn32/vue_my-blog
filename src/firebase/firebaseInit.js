import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAr7BIL0JXK2Pl3oTvIWSqH39AyHMCBJ2c",
  authDomain: "vueblog-9c0db.firebaseapp.com",
  projectId: "vueblog-9c0db",
  databaseURL:"gs://vueblog-9c0db.appspot.com",
  storageBucket: "vueblog-9c0db.appspot.com",
  messagingSenderId: "801485168609",
  appId: "1:801485168609:web:13943b9a70ce4899bd7ca0",
  measurementId: "G-CPV5LPS5N9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
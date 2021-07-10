import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyCThizZ1KOzqoig0-CbKhqMjZrzt7OW6hY",
    authDomain: "hotel-management-system-69333.firebaseapp.com",
    projectId: "hotel-management-system-69333",
    storageBucket: "hotel-management-system-69333.appspot.com",
    messagingSenderId: "204338536941",
    appId: "1:204338536941:web:79413775d29768f52407e4",
    measurementId: "G-RL13G88HNY"
  };
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
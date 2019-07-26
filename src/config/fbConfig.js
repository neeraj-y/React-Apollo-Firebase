import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBJRhIGiYRsIobtO_7zfGf65-2fn9hd5i0",
    authDomain: "ticketing-app-4a031.firebaseapp.com",
    databaseURL: "https://ticketing-app-4a031.firebaseio.com",
    projectId: "ticketing-app-4a031",
    storageBucket: "ticketing-app-4a031.appspot.com",
    messagingSenderId: "300377214629",
    appId: "1:300377214629:web:bb2666db6c37e7a8"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzkZB5QQb15Hpjzs3faSCGM7B41QWHlMg",
  authDomain: "omoide-react.firebaseapp.com",
  projectId: "omoide-react",
  storageBucket: "omoide-react.appspot.com",
  messagingSenderId: "234751536229",
  appId: "1:234751536229:web:eee277ca22a6237a81ea8c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
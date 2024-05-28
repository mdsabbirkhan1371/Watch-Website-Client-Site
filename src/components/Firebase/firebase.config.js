// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAAmoIcz-3Efcn9dzdJhEyTar33vMkV4Iw',
  authDomain: 'watch-website-6b0de.firebaseapp.com',
  projectId: 'watch-website-6b0de',
  storageBucket: 'watch-website-6b0de.appspot.com',
  messagingSenderId: '266881881066',
  appId: '1:266881881066:web:3849b8f62886a83a43d893',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

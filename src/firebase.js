import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCw25vjk6bLQHPFBGDMBwWNe3DPAJMxnxQ",
  authDomain: "shape-ai-8c6e4.firebaseapp.com",
  projectId: "shape-ai-8c6e4",
  storageBucket: "shape-ai-8c6e4.appspot.com",
  messagingSenderId: "790367279076",
  appId: "1:790367279076:web:b70effc1d4a9d34d4e19f1",
  measurementId: "G-6KP276WK69",
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;

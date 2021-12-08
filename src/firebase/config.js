import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA-LZj11hRvD9XzoIr37b46cVQx_XWZLZg",
    authDomain: "mymoney-c24eb.firebaseapp.com",
    projectId: "mymoney-c24eb",
    storageBucket: "mymoney-c24eb.appspot.com",
    messagingSenderId: "690554700856",
    appId: "1:690554700856:web:ebed7631b5712ddb3dd2cd"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  export { projectFirestore, projectAuth }
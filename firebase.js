// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDT_Y-i2b6AsvNyF27IEiOZ8-RWis85HaM",
    authDomain: "task-art.firebaseapp.com",
    projectId: "task-art",
    storageBucket: "task-art.appspot.com",
    messagingSenderId: "409877504040",
    appId: "1:409877504040:web:c49fa984ebc4c84585951d",
    measurementId: "G-N4LPRYYL4P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db= firebase.firestore();

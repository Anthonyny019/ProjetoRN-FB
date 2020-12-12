import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAOYYuB9mydY6jxNnjHTQWVj3-toj0kEUs",
    authDomain: "colecionaveisfb-fce55.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-fce55.firebaseio.com",
    projectId: "colecionaveisfb-fce55",
    storageBucket: "colecionaveisfb-fce55.appspot.com",
    messagingSenderId: "265324068212",
    appId: "1:265324068212:web:ec684d7f7e8128d6edc021",
    measurementId: "G-3S489FN793"
  };

  var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();
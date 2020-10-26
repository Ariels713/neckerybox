import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// require("dotenv").config();

var firebaseConfig = {
  apiKey: 'AIzaSyAa2O4FWVL62pPL85kwjlu00dNfQieWFbE',
  authDomain: 'neckerybox.firebaseapp.com',
  databaseURL: 'https://neckerybox.firebaseio.com',
  projectId: 'neckerybox',
  storageBucket: 'neckerybox.appspot.com',
  messagingSenderId: '987424848560',
  appId: '1:987424848560:web:9b806c10301600c3d21975',
  measurementId: 'G-15TGZRV978',
}

firebase.initializeApp(firebaseConfig)
firebase.auth()

export default firebase

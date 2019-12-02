import firebase from 'firebase/app'
import 'firebase/database'
// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBf6WRp2Vfq9FTfvids02HOQHtYQWY6HAc',
  authDomain: 'wishy-washy-7388d.firebaseapp.com',
  databaseURL: 'https://wishy-washy-7388d.firebaseio.com',
  projectId: 'wishy-washy-7388d',
  storageBucket: 'wishy-washy-7388d.appspot.com',
  messagingSenderId: '810419923918',
  appId: '1:810419923918:web:5b7446d6139d0fe39ed99f'
}

firebase.initializeApp(firebaseConfig)
// this exports the CONFIGURED version of firebase
export default firebase

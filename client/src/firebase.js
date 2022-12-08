import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

// const firebaseConfig = {
//   databaseURL: 'https://nlu-mern-default-rtdb.asia-southeast1.firebasedatabase.app',
//   apiKey: 'AIzaSyDESHCg5VBIuUbWG8_HdB1K3OnKp5oCAOQ',
//   authDomain: 'nlu-mern.firebaseapp.com',
//   projectId: 'nlu-mern',
//   storageBucket: 'nlu-mern.appspot.com',
//   messagingSenderId: '782331605036',
//   appId: '1:782331605036:web:712fb87babc57671c16189',
//   measurementId: 'G-5FQ94WKDGW'
// };

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
if (!firebaseConfig) {
  console.error('Please set up your firebase config in .env file');
}

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage, firebase as default };

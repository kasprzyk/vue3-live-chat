import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC4MRR86eGw237mYXSdy3mImzwW9gHw_Vk',
  authDomain: 'new-project-2c64d.firebaseapp.com',
  projectId: 'new-project-2c64d',
  storageBucket: 'new-project-2c64d.appspot.com',
  messagingSenderId: '766454606253',
  appId: '1:766454606253:web:1aa6f497fb2d6931de9924',
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };

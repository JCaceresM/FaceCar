/* eslint-disable @typescript-eslint/no-unused-vars */



import firebase from 'firebase'
  
  export const firebaseConfig = {
    apiKey: 'AIzaSyCep8UD6ftOXuwNp-OJyQidght6__lJg9o',
    authDomain: 'facecar-11bcf.firebaseapp.com',
    projectId: 'facecar-11bcf',
    storageBucket: 'facecar-11bcf.appspot.com',
    messagingSenderId: '427227584362',
    appId: '1:427227584362:web:085830e0f442069a367713',
    measurementId: 'G-810Z12ZDF5',
  }
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const dbAuth =firebase.auth();

export {dbAuth,db};

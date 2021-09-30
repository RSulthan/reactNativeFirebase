import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyALVsDYr2B3Lg4ZTO2qCyi0HQ2xCeDcZkg',
  authDomain: 'reactnativedb-43878.firebaseapp.com',
  databaseURL: 'https://reactnativedb-43878-default-rtdb.firebaseio.com',
  projectId: 'reactnativedb-43878',
  storageBucket: 'reactnativedb-43878.appspot.com',
  messagingSenderId: '258451387737',
  appId: '1:258451387737:web:a3f3fdcfc4edc0034f0848',
  measurementId: 'G-8RT32Z03KY',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase;

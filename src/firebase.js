import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBXXrr7rafOENae0P7MCakML-SqxkWAgkU",
  authDomain: "m-city-bfc26.firebaseapp.com",
  databaseURL: "https://m-city-bfc26.firebaseio.com",
  projectId: "m-city-bfc26",
  storageBucket: "m-city-bfc26.appspot.com",
  messagingSenderId: "355569002582"
};

firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');


export {
    firebase,
    firebaseMatches
}

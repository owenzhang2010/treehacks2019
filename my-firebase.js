import * as firebase from 'firebase';
require("firebase/firestore");

config = {
  projectId: 'treehax-2019',
  apiKey: 'AIzaSyBNZLLpKxvf0Rb0aWcyvibRM54WMRF9deQ',
  authDomain: 'treehax-2019.firebaseapp.com',
  databaseURL: 'https://treehax-2019.firebaseio.com',
  storageBucket: 'treehax-2019.appspot.com'
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

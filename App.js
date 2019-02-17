// Import the screens
import Main from './components/Main';
import Chat from './components/Chat';
// Import React Navigation
import { createStackNavigator } from 'react-navigation'
import firebase from 'firebase';
require ("firebase/firestore");

/// Initialize Firebase
firebase.initializeApp({
  projectId: 'treehax-2019',
  apiKey: 'AIzaSyBNZLLpKxvf0Rb0aWcyvibRM54WMRF9deQ',
  authDomain: 'treehax-2019.firebaseapp.com',
  databaseURL: 'https://treehax-2019.firebaseio.com',
  storageBucket: 'treehax-2019.appspot.com'
});
var db = firebase.firestore();


// db write sample; should be reusable function call or something
// This adds a new document (record) in collection "cities"
// "time" below should be unix formatted
db.collection("active").doc("time").set({ 
   user: "someuid",
    latitude: "0",
    longitude: "0",
    latitudeDelta: "0.0922",
    longitudeDelta: "0.0421"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

// Create the navigator
const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});

// Export it as the root component
export default navigator

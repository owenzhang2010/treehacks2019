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

db.collection("users").doc("ghost").set({
  name: "Stanford Ghost",
  gender: "Ghost",
  age: "195",
  phone: "666-666-6666",
  email: "leland_lel@stanford.edu",
  lat: 37.427828 + 0.01,
  lon: -122.174162 + 0.005
});

db.collection("users").doc("tree").set({
  name: "Stanford Tree",
  gender: "Tree",
  age: "1000",
  phone: "800-THE-TREE",
  email: "leafy_boi@stanford.edu",
  lat: 37.427828 - 0.003,
  lon: -122.174162 + 0.011
});

db.collection("users").doc("owen").set({
  name: "Owen Zhang",
  gender: "Male",
  age: "19",
  phone: "848-459-0929",
  email: "owenzhang2010@berkeley.edu",
  lat: 37.8723,
  lon: -122.2736
});

// Create the navigator
const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});

// Export it as the root component
export default navigator

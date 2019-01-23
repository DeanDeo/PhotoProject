import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "photoapp-92661.firebaseapp.com",
  databaseURL: "https://photoapp-92661.firebaseio.com"
};

const firebaseApp = firebase.initializeApp(config);
// export const provider = new firebase.auth.GoogleAuthProvider();
export { firebaseApp };
export default firebase;
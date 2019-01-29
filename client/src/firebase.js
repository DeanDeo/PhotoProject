import firebase from "firebase";

const config = {
  apiKey: 'AIzaSyC5L8USzVlO_kH6NvhxBmi5ECLWKNiTxRM',
  authDomain: "photoapp-92661.firebaseapp.com",
  databaseURL: "https://photoapp-92661.firebaseio.com"
};

const firebaseApp = firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export { firebaseApp };
export default config;
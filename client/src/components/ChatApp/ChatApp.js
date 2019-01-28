//This component will be a wrapper on our form and message. It will also handle FIREBASE authentication.

import React, { Component } from 'react';
// import logo from '../../images/logo.svg';
import './ChatApp.css';
import Form from '../Form/Form.js';
import firebase from 'firebase';
// import firebaseConfig from '../../firebase';
// firebase.initializeApp(firebaseConfig);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  handleLogOut() {
    firebase.auth().signOut();
  }
  render() {
    return (
      <div className="app">
        <div className="app__header">
          {/* <img src={logo} className="app__logo" alt="logo" /> */}
          <h2>
            SIMPLE APP WITH REACT
          </h2>
          { !this.state.user ? (
            <button
              className="app__button"
              onClick={this.handleSignIn.bind(this)}
            >
              Sign in
            </button>
          ) : (
            <button
              className="app__button"
              onClick={this.handleLogOut.bind(this)}
            >
              Logout
            </button>
          )}
        </div>
        <div className="app__list">
          <Form user={this.state.user} />
        </div>
      </div>
    );
  }
}
export default App;
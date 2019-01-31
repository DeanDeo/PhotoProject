import React from "react";
import "./landing.css";
import axios from "axios";
// import firebase from "../../firebase";
import LoginLogoutButton from "../../components/LoginLogoutButton";
import LoginLogoutButton2 from "../../components/LoginLogoutButton2";
import firebase from 'firebase';
// import firebaseConfig from '../../firebase';
import { Redirect } from "react-router-dom";


class LandingPage extends React.Component {
  state = {
    uid: null,
    displayName: null,
    authTypes: ["Google"],
    redirectUser: false,
    redirectPhotog: false,
    user: null
  };

  setRedirectUser = () => {
    this.setState({
      redirectUser: true
    });
  };

  setRedirectPhotog = () => {
    this.setState({
      redirectPhotog: true
    });
  };

  renderRedirectUser = () => {
    if (this.state.redirectUser) {
      return <Redirect to="/userprofile" />;
    }
  };

  renderRedirectPhotog = () => {
    if (this.state.redirectPhotog) {
      return <Redirect to="/photogprofile" />;
    }
  };

  authHandler1 = authData => {
    const { uid, displayName } = authData.user;
    axios.get(`/api/user/${uid}`).then(res => {
      if (res.data.length === 0) {
        axios.post("/api/user/create", { uid }).then(res => {
          window.localStorage.setItem("uid", res.data.uid);
          window.localStorage.setItem("id", res.data._id);
          console.log("id: " + window.localStorage.getItem("id"));
          console.log("uid: " + window.localStorage.getItem("uid"));
          window.localStorage.setItem("displayName", displayName);
          this.setState({
            uid,
            displayName
          }); 
        });
        this.setRedirectUser();
      } else {
        window.localStorage.setItem("uid", res.data[0].uid);
        window.localStorage.setItem("id", res.data[0]._id);
        console.log("id: " + window.localStorage.getItem("id"));
        console.log("uid: " + window.localStorage.getItem("uid"));
        window.localStorage.setItem("displayName", displayName);
        this.setState({
          uid,
          displayName
        });       
        this.setRedirectUser();
      }   
    });
  };

  authHandler2 = authData => {
    const { uid, displayName } = authData.user;
    axios.get(`/api/user/${uid}`).then(res => {
      if (res.data.length === 0) {
        axios.post("/api/user/create", { uid }).then(res => {
          window.localStorage.setItem("uid", res.data.uid)
          window.localStorage.setItem("id", res.data._id);
          console.log("id: " + window.localStorage.getItem("id"));
          console.log("uid: " + window.localStorage.getItem("uid"));
          window.localStorage.setItem("displayName", displayName)
          this.setState({
            uid,
            displayName
          });
          
        });
        this.setRedirectPhotog();
      } else {
        window.localStorage.setItem("uid", res.data[0].uid);
        window.localStorage.setItem("id", res.data[0]._id);
        console.log("id: " + window.localStorage.getItem("id"));
        console.log("uid: " + window.localStorage.getItem("uid"));
        window.localStorage.setItem("displayName", displayName);
        this.setState({
          uid,
          displayName
        });
        this.setRedirectPhotog();
        
      }    
    });
    //check if user exists in mongo db, if not create user, if so set state equal to user
    //set the state of the inventory to reflect current user
  };

  login1 = provider => {
    // console.log(firebase.auth.auth[`${provider}AuthProvider`]);  
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebase
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler1);
  };

  login2 = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebase
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler2);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null, user: null });
    window.localStorage.setItem("uid", "");
    window.localStorage.setItem("user", "");
  };

  render() {
    // const message = (
    //   <div className="navbar-brand">
    //     {this.state.displayName || ""}
    //   </div>
    // );

    const authButtons1 = this.state.uid ? (
      <LoginLogoutButton logout={this.logout} />
    ) : (
      this.state.authTypes.map((type, i) => {
        return (
          <LoginLogoutButton key={i} login1={this.login1} authType={type} />
        );
      })
    );

    const authButtons2 = this.state.uid ? (
      <LoginLogoutButton2 logout={this.logout} />
    ) : (
      this.state.authTypes.map((type, i) => {
        return (
          <LoginLogoutButton2 key={i} login2={this.login2} authType={type} />
        );
      })
    );

    return (
      <div className="row">
        <div className="split-pane hvr-shutter-out-vertical-white col-sm-6 client-side">
          <div>
            <i className="far fa-user-circle font-black" /> <br />
            <br />
            <div className="text-content font-black">
              <div className="big font-black">HIRE A</div>
              <div className="bold font-black">PHOTOGRAPHER</div>
            </div>
            {this.renderRedirectUser()}
            {authButtons1}
          </div>
        </div>
        <div className="split-pane hvr-shutter-out-vertical col-sm-6 photographer-side">
          <div>
            <i className="fas fa-camera" /> <br />
            <br />
            <div className="text-content">
              <div className="big">I AM A</div>
              <div className="bold">PHOTOGRAPHER</div>
            </div>
            {this.renderRedirectPhotog()}
            {authButtons2}
          </div>
        </div>
        <div id="split-pane-or">
          <div>

            <img alt="logo" src={require("./logo.png")} />

          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;

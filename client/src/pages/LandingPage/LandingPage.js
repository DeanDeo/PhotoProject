import React from "react";
import "./landing.css";
import axios from "axios";
import firebase from "../../firebase";
import LoginLogoutButton from "../../components/LoginLogoutButton";

class LandingPage extends React.Component {
  state = {
    uid: null,
    displayName: null,
    authTypes: ["Google"]
  };

  authHandler = authData => {
    const { uid, displayName } = authData.user;
    axios.get(`/api/user/${uid}`).then(res => {
      console.log(res.data)
      if (res.data.length === 0) {
        axios.post("/api/user/create", { uid }).then(res => {
          window.localStorage.setItem("uid", res.data[0]._id)
          window.localStorage.setItem("displayName", displayName)
          this.setState({
            uid,
            displayName
          });
        });
      } else {
        window.localStorage.setItem("uid", res.data[0]._id)
        console.log(window.localStorage.getItem("uid"))
        window.localStorage.setItem("displayName", displayName)
        this.setState({
          uid,
          displayName
        });
      }
    });
    //check if user exists in mongo db, if not create user, if so set state equal to user
    //set the state of the inventory to reflect current user
  };

  login = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebase
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null, displayName: null });
    window.localStorage.setItem("uid", "")
    window.localStorage.setItem("displayName", "")
  };

  render() {
    // const message = (
    //   <div className="navbar-brand">
    //     {this.state.displayName || ""}
    //   </div>
    // );

    const authButtons = this.state.uid ? (
      <LoginLogoutButton logout={this.logout} />
    ) : (
      this.state.authTypes.map((type, i) => {
        return <LoginLogoutButton key={i} login={this.login} authType={type} />;
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
            {authButtons}
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
          {authButtons}
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

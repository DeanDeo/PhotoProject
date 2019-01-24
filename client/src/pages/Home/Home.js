import React, { Component } from "react";
import axios from "axios";
import firebase from "../../firebase";
import { Col, Row, Container } from "../../components/Grid";
import LoginLogoutButton from "../../components/LoginLogoutButton";
import Navbar from "../../components/Navbar";

class Home extends Component {
  state = {
    uid: null,
    displayName: null,
    authTypes: ["Google"]
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = authData => {
    const { uid, displayName } = authData.user;
    axios.get(`/api/user/${uid}`).then(res => {
      console.log(res.data)
      if (res.data.length === 0) {
        axios.post("/api/user/create", { uid }).then(res => {
          this.setState({
            uid,
            displayName
          });
        });
      } else {
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
  };

  render() {
    const message = (
      <div className="navbar-brand">
        {this.state.displayName || "Please Login!"}
      </div>
    );
    const authButtons = this.state.uid ? (
      <LoginLogoutButton logout={this.logout} />
    ) : (
      this.state.authTypes.map((type, i) => {
        return <LoginLogoutButton key={i} login={this.login} authType={type} />;
      })
    );

    return (
      <div>
        <Navbar>
          {message}
          {authButtons}
        </Navbar>
        <Container>
          <Row>
            <Col size="md-12">
            </Col>
          </Row>
        </Container>
        </div>
    );
  }
}

export default Home;
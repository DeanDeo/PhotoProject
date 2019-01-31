import React from "react";

class LoginLogoutButton extends React.Component {

  // bringHome = () => {
  //   return 
  // }

  render(){
  // console.log(this.props.authType);
  // console.log(this.props.login1);

  //render a button for each auth type or render a logout button if user is already logged in
  if (this.props.authType && this.props.login1) {
    return (
      <div>
      <button
        className="btn btn-default navbar-btn"
        onClick={() => this.props.login1(`${this.props.authType}`)}
      >
        {`${this.props.authType}`} Login
      </button>
      </div>
    );
  }
  else{
  return (
    <div>
    <button className="btn btn-default navbar-btn mr-1" onClick={this.props.logout}>
      Logout
    </button>
    </div>
  );
  }
}
};

export default LoginLogoutButton;
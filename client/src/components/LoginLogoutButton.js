import React from "react";

const LoginLogoutButton = props => {
  //render a button for each auth type or render a logout button if user is already logged in
  if (props.authType && props.login) {
    return (
      <button
        className="btn btn-default navbar-btn"
        onClick={() => props.login(`${props.authType}`)}
      >
        {`${props.authType}`} Login
      </button>
    );
  }
  return (
    <button className="btn btn-default navbar-btn mr-1" onClick={props.logout}>
      Logout
    </button>
  );
};

export default LoginLogoutButton;
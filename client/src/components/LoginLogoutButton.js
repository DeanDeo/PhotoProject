import React from "react";

const LoginLogoutButton = props => {

  console.log(props.authType);
  console.log(props.login);

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
    <div>
    <button className="btn btn-default navbar-btn mr-1" onClick={props.logout}>
      Logout
    </button>
    </div>
  );
};

export default LoginLogoutButton;
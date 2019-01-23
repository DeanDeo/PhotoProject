import React from "react";

const NavBar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">{props.children}</div>
    </div>
  </nav>
);

export default NavBar;
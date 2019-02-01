import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // InputGroup,
  // Input
} from "reactstrap";
import "./Navbar.css";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout = () => {
    window.localStorage.setItem("uid", "");
    window.localStorage.setItem("id", "");
    window.localStorage.setItem("displayName", "");
  }


  render() {
    let id = window.localStorage.getItem("id")

    return (
      <div>
        <Navbar className="roboto-font" color="black" light expand="md">
          <NavbarBrand href="/" className="bokehheader">
            <div className="text-focus-in">BOKEH</div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink className="hvr-underline-from-center" href="/About">
                  About
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink className="hvr-underline-from-center" href="/results">
                  Photographers
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="hvr-underline-from-center" href="/userProfile">
                  Edit Profile
                </NavLink>
              </NavItem>
              {/* link for chat user as a prop
               */}
               {/* pass user prop in chatApp */}
              <NavItem>
                <NavLink
                  className="hvr-underline-from-center"
                  href={`/Profile/${id}`}
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                { <NavLink
                  className="hvr-underline-from-center"
                  href="/" onClick={this.logout}
                >
                
                  Log Out
                </NavLink>}            
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="search_container">
          <input
            className="search_input"
            type="text"
            placeholder="Search for genres of photography or location"
          />
        </div>
      </div>
    );
  }
}

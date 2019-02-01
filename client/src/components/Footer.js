import React from "react";
import "./Footer.css";
import GithubLogo from "../components/github-brands.svg";

class Footer extends React.PureComponent {
  render() {
    return (
      <footer>
        <div className="container text-center">
          <h4>BOKEH © 2018</h4>
          <a href="https://github.com/DeanDeo/PhotoProject" data-tip="GitHub">
            <img src={GithubLogo} alt="github logo" className="github-logo" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;

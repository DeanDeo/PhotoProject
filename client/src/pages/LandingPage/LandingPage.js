import React from "react";
import "./landing.css";

class LandingPage extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
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
            <button>Log In with Google</button>
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
            <a className="button">Log in with Google </a>
          </div>
        </div>
        <div id="split-pane-or">
          <div>
            <img src={require("./logo.png")} alt="Logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;

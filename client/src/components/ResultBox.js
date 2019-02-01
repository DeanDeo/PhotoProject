import React from "react";
import { Link } from "react-router-dom";
import "./resultBox.css";
import { photosample } from "../pages/LandingPage/vino.jpg";

class ResultBox extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    console.log(this.props);
    const myStyles = {
      box: {
        backgroundImage: this.props.path,
        height: "300px",
        width: "400px"
      }
    };
    return (
      <Link to={`./Profile/${this.props.uId}`}>
        <div>
          <div className="image" style={myStyles.box}>
            <div className="title">
              Photographer Name {console.log(this.props)}
            </div>
            <br />
            <div className="description">description</div>
            <img className="image" alt="path" src={this.props.path} />
          </div>
        </div>
      </Link>
    );
  }
}

export default ResultBox;

import React from "react";
import { Link } from "react-router-dom";
import "./resultBox.css";

// import { photosample } from "../pages/LandingPage/vino.jpg";
import axios from "axios";

class ResultBox extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  state = {
    userData: {}
  };
  componentDidMount() {
    console.log(this.props.id);
    axios.get(`/api/user/findById/${this.props.id}`).then(res => {
      console.log(res);
      this.setState({
        userData: res.data
      });
    });
  }

  render() {
    console.log(this.props);
    const myStyles = {
      box: {
        backgroundColor: "grey",
        height: "300px",
        width: "400px"
      }
    };
    return (
      <Link to={`./Profile/${this.props.id}`}>
        <div>
          <div style={myStyles.box}>
            <div className="title">
              {this.state.userData.firstName +
                " " +
                this.state.userData.lastName}
            </div>
            <div className="description">{this.state.userData.location}</div>

            <img className="image" alt="path" src={this.props.path} />
          </div>
        </div>
      </Link>
    );
  }
}

export default ResultBox;

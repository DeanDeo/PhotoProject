import React from "react";
import { Link } from "react-router-dom";
import "./resultBox.css";
import { photosample } from "../pages/LandingPage/vino.jpg";
import axios from "axios";

class ResultBox extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  state = {
    userData: {}
    
  }
  componentDidMount() {
    
    console.log(this.props.id)
    axios.get(`/api/user/findById/${this.props.id}`).then(res => {
      console.log(res)
      this.setState({
        userData: res.data
      })

    })
  }

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
      <Link to={"./profile/"+ this.props.id}>
        <div>
          <div className="image" style={myStyles.box}>
            <div className="title">
              {this.state.userData.firstName + " " + this.state.userData.lastName}
              <img className="image" alt="path" src={this.props.path} />
         
            </div>
            <br />
            <div className="description">description</div>
            
          </div>
        </div>
      </Link>
    );
  }
}

export default ResultBox;

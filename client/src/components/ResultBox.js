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
  componentWillUpdate(prevProps) {
    console.log("prev: ", prevProps.id, 'new: ', console.log(this.props.id))
    if (prevProps.id !== this.state.userData._id) {
      axios.get(`/api/user/findById/${this.props.id}`).then(res => {
        console.log(res);
        this.setState({
          userData: res.data
        });
      });
    }
  }

  render() {
    console.log(this.props);
    const myStyles = {
      box: {
        // backgroundColor: "black",
        height: "300px",
        width: "400px"
      },
      img: {
        height: "300px",
        width: "400px"
      }
    };
    return (
        <figure className="imghvr-blur" style={myStyles.box}>
         <Link to={`./Profile/${this.props.id}`} className="img-link">
     <img style={myStyles.img} alt="path" src={this.props.path} />
            <figcaption>
              {this.state.userData.firstName +
                " " +
                this.state.userData.lastName}{" "}
              <br /> {this.state.userData.location}
            </figcaption>
{/* <a href={`./Profile/${this.props.id}`}></a> */}
           </Link>
          </figure>

    );
  }
}

export default ResultBox;

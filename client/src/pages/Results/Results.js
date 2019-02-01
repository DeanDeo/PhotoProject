import React from "react";
import ResultBox from "../../components/ResultBox";
import axios from "axios";
import "./Results.css";
import Navbar from "../../components/Navbar";

// import { Link } from "react-router-dom";

class Results extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get("/api/profile/findMain").then(res => {
      this.setState({
        data: res.data
      });
      console.log(this.state.data);
    });
  }
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Navbar />
        {console.log(this.state.data)}
        <div className="results">
          {this.state.data.map(picObj => (
            <ResultBox path={picObj.path} id={picObj.photographer[0]} />
          ))}
          {/* <ResultBox />
          <ResultBox />
          <ResultBox />
          <ResultBox />
          <ResultBox />
          <ResultBox />
          <ResultBox />
          <ResultBox />
          <ResultBox />
          <ResultBox /> */}
        </div>
      </div>
    );
  }
}

export default Results;

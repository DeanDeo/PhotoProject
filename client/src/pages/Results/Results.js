import React from "react";
import ResultBox from "../../components/ResultBox";
import axios from "axios";
import "./Results.css";
import Navbar from "../../components/Navbar";
import API from "../../utils/API";
// import Footer from "../../components/Footer";
// import Pages from "../../components/Pagination";

// import { Link } from "react-router-dom";

class Results extends React.Component {
  state = {
    data: null,
    search: "",
    searchedUsers: []
  };

  componentDidMount() {
    axios.get("/api/profile/findMain").then(res => {
      this.setState({
        data: res.data
      });
    });
  }

  async fetchPhotos() {
    const data = [];
    for (let i = 0; i < this.state.searchedUsers.length; i++) {
      const photo = await axios.get("/api/photos/searchedMainPhotos/" + this.state.searchedUsers[i]._id);
      data.push(photo.data[0])
    }
    return data;
  }
  // constructor(props) {
  //   super(props);
  // }
  handleSearchSubmit = event => {
    event.preventDefault();
    API.getPhotographers({ location: this.state.search }).then(res => {

      this.setState({

        searchedUsers: res.data
      })
      this.fetchPhotos().then(photos => {
        console.log('photos', photos)
        this.setState({ data: photos })
      }
      )
      // const data = []
      // for (let i = 0; i < this.state.searchedUsers.length; i++) {
      //   axios.get("/api/photos/searchedMainPhotos/" + this.state.searchedUsers[i]._id).then(res => {
      //     console.log(res)
      //     data.push(res)
      //     if (data.length === this.state.searchedUsers.length) {
      //       this.setState({
      //         data
      //       })
      //     }
      //   })
      // }
    })
  }

  handleSearchChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <form>
          <div className="search_container">
            <input
              className="search_input"
              type="text" name="search"
              placeholder="Search for genres of photography or location"
              onChange={this.handleSearchChange}
              value={this.state.search}
            />
            <button type="submit" onClick={this.handleSearchSubmit}></button>
            {/* <select className="search_input"
              name="location"
              value={this.state.location}
              onChange={this.handleDropdown}
              className="form-control"
            >
              <option value="Chicago, IL">Chicago, IL</option>
              <option value="Boston, MA">Boston, MA</option>
              <option value="Los Angeles, CA">
                Los Angeles, CA
              </option>
              <option value="New York City, NY">New York City, NY</option>
            </select> */}
          </div>
        </form>


        <br />
        <div className="results">
          {this.state.data && this.state.data.map(picObj => {
            console.log('pic id, ', picObj.photographer[0])
            return (
              <ResultBox path={picObj.path} id={picObj.photographer[0]} />
            )
          })}
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
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Results;

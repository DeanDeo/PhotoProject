import React from "react";
import { Loader } from "../../components/Photo";
import Navbar from "../../components/Navbar";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const id = window.localStorage.getItem("id");
class profile extends React.Component {
  state = {
    userData: {},
    photos: []
  };
  componentDidMount() {

    axios.get(`/api/user/findById/${this.props.match.params.id}`).then(res => {
      this.setState({
        userData: res.data
      });
    });
    axios
      .get(`/api/profile/populatePhotos/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          photos: res.data
        });
      });
  }

  profilePic(picId) {

    const id = window.localStorage.getItem("id")
    axios.put("/api/update/profilePic", { id, picId }).then(res => {

    })


  }
  mainPic(picId) {
    const id = window.localStorage.getItem("id")
    axios.put("/api/update/mainPic", { id, picId }).then(res => {

    })

  }
  deleteProfile(id) {
    axios.put("/api/user/delete/" + id).then(res => {

    })
  }
  render() {
    console.log(this.state.photos)
    console.log(this.state.userData)


    const currentId = window.localStorage.getItem("id");
    const id = this.props.match.params.id;
    if (currentId === id) {
      let instagram = `https://www.instagram.com/${
        this.state.userData.instagram
      }?hl=en`;
      return (
        <div>
          <Navbar />
          <div>

            <h1>| {this.state.userData.firstName} {this.state.userData.lastName} |</h1>
            <div className='infoBox' >
              <h4><i className="fas fa-city"></i>{this.state.userData.location}</h4>
              <h4><i className="fas fa-mobile-alt"></i>{this.state.userData.phoneNumber}</h4>
              <a href={instagram}><i className="fab fa-instagram"></i> Instagram</a>
              <h4><i className="fas fa-envelope"></i>{this.state.userData.email}</h4>
              <p><i className="far fa-user-circle"></i>{this.state.userData.bio}</p>
            </div>
            <Loader />
            <Link to={`../`}>
              <button onClick={() => { this.deleteProfile(id) }}>Delete Profile</button>
            </Link>

            < div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" >
              <div className="carousel-inner">
                {this.state.photos.map(
                  (picObj, e) => picObj.profile_photo ?
                    <div class="carousel-item active"><img className="profile_picture d-block w-100" src={picObj.path} alt='propic' /> <div class="carousel-caption d-none d-md-block">
                      <h5>Profile picture</h5>
                    </div></div>
                    :

                    this.state.userData.photographer ?

                      <div className="carousel-item"> <img className="d-block w-100" src={picObj.path} alt="propic1" /><div className="carousel-caption d-none d-md-block">    
                        <button onClick={() => this.profilePic(picObj._id)} type="button">Make profile pic</button>
                        <button onClick={() => this.mainPic(picObj._id)} type="button">Make main pic</button></div></div>
                      :  <div className="carousel-item"> <img className="d-block w-100" src={picObj.path} alt="propic1" /><div className="carousel-caption d-none d-md-block">    
                      <button onClick={() => this.profilePic(picObj._id)} type="button">Make profile pic</button>
                      </div></div>


                      

                )}
              </div>
              <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

           
          </div>
        </div>
      );
    } else {
      let instagram = `https://www.instagram.com/${
        this.state.userData.instagram
      }?hl=en`;
      return (
        <div>
          <Navbar />
          <span>
            <h1>
              {this.state.userData.firstName} {this.state.userData.lastName}
            </h1>
            <h4>{this.state.userData.location}</h4>
            <h4>{this.state.userData.phoneNumber}</h4>
            <a href={instagram}>
              Instagram <i class="fab fa-instagram" />
            </a>
            <h4>{this.state.userData.email}</h4>
            <p>{this.state.userData.bio}</p>



            < div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" >
              <div className="carousel-inner">
                {this.state.photos.map(picObj => picObj.profile_photo ?
                  <div class="carousel-item active"><img className="profile_picture d-block w-100" src={picObj.path} alt='propic' /> <div class="carousel-caption d-none d-md-block">
                    <h5>Profile picture</h5>
                  </div></div> :
                  <div className="carousel-item"> <img className="d-block w-100" src={picObj.path} alt="propic1" /></div>
                )}
              </div>
              <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </span >
        </div >

      )

    }
  }
}
export default profile

 


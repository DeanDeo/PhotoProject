import React from 'react';
import { Loader } from "../../components/Photo";
import Navbar from "../../components/Navbar";
import axios from "axios"
import './style.css'
const id = window.localStorage.getItem("id")
class profile extends React.Component {

  state = {
    userData: {},
    photos: []
  }
  componentDidMount() {
    
    console.log(this.props.match.params.id + "  " + id)
    axios.get(`/api/user/findById/${this.props.match.params.id}`).then(res => {
      this.setState({
        userData: res.data
      })

    })
    axios.get(`/api/profile/populatePhotos/${window.localStorage.getItem("id")}`).then(res => {
      this.setState({
        photos: res.data
      })

    })
  }

  profilePic(picId) {
    const id = window.localStorage.getItem("id")
    axios.put("/api/update/profilePic", {id, picId}).then(res =>{
     
    })
    
   
  }
  mainPic(picId) {
    const id = window.localStorage.getItem("id")
    axios.put("/api/update/mainPic", {id, picId}).then(res =>{
      
    })
  
  }
  render() {
console.log(this.state.photos)
console.log(this.state.userData)

    const id = window.localStorage.getItem("id")
    if (id === this.props.match.params.id) {
      let instagram = `https://www.instagram.com/${this.state.userData.instagram}?hl=en`
      return (
        <div>
          <Navbar />
          <div>
            <h1>| {this.state.userData.firstName} {this.state.userData.lastName} |</h1>
            <div className = 'infoBox' >
            <h4><i className="fas fa-city"></i>{this.state.userData.location}</h4>
            <h4><i className="fas fa-mobile-alt"></i>{this.state.userData.phoneNumber}</h4>
            <a href={instagram}><i className="fab fa-instagram"></i> Instagram</a>
            <h4><i className="fas fa-envelope"></i>{this.state.userData.email}</h4>
            <p><i className="far fa-user-circle"></i>{this.state.userData.bio}</p>
            </div>
            <Loader />

            {this.state.photos.map(
              (picObj, e) => picObj.profile_photo ?
                <img key = {e} className="profile_picture" src={picObj.path} alt="" />
                :

                this.state.userData.photographer ?
                
                <div key={e} className="pictures">
                  <img src={picObj.path} alt=""/>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Change photo role
                </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <button  className="dropdown-item" onClick={()=>this.profilePic(picObj._id)} type="button">Make profile pic</button>
                      <button  className="dropdown-item" onClick={()=>this.mainPic(picObj._id)} type="button">Make main pic</button>
                    </div>
                  </div>
                </div>: <div key={e} className="pictures">
                  <img src={picObj.path} alt=""/>
                      <button  onClick={()=>this.profilePic(picObj._id)} type="button">Make profile pic</button>
                     
                    
                  </div>
                
                )}
          </div>
        </div>
      )
    }
    else {
      let instagram = `https://www.instagram.com/${this.state.userData.instagram}?hl=en`
      return (
        <div>
          <Navbar />
          <span>
            <h1>{this.state.userData.firstName} {this.state.userData.lastName}</h1>
            <h4>{this.state.userData.location}</h4>
            <h4>{this.state.userData.phoneNumber}</h4>
            <a href={instagram}>Instagram <i class="fab fa-instagram"></i></a>
            <h4>{this.state.userData.email}</h4>
            <p>{this.state.userData.bio}</p>


            {this.state.photos.map(picObj => picObj.profile_picture ? <img className="profile_picture" src={picObj.path} alt='propic'/> : <img src={picObj.path} alt="propic1"/>)}
          </span>
        </div>

      )
    }
  }
}
export default profile

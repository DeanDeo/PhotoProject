import React from 'react';
import { Loader } from "../../components/Photo";
import Navbar from "../../components/Navbar";
import axios from "axios"
const uid = window.localStorage.getItem("uid")
class profile extends React.Component {

  state = {
    userData: {},
    photos: []
  }
  componentDidMount() {
    
    console.log(this.props.match.params.uid + "  " + uid)
    axios.get(`/api/user/findById/${this.props.match.params.uid}`).then(res => {
      this.setState({
        userData: res.data
      })

    })
    axios.get(`/api/profile/populatePhotos/${uid}`).then(res => {
      this.setState({
        photos: res.data
      })

    })
  }

  profilePic(picId) {
    axios.put("/api/update/profilePic", {uid, picId}).then(res =>{
     
    })
    
   
  }
  mainPic(picId) {
    axios.put("/api/update/mainPic", {uid, picId}).then(res =>{
      
    })
  
  }
  render() {

console.log(this.state.userData)

    if (uid === this.props.match.params.uid) {
      return (
        <div>
          <Navbar />
          <div>
            <h1>{this.state.userData.firstName} {this.state.userData.lastName}</h1>
            <h4>{this.state.userData.location}</h4>
            <h4>{this.state.userData.phoneNumber}</h4>
            <h4>{this.state.userData.instagram}</h4>
            <h4>{this.state.userData.email}</h4>
            <p>{this.state.userData.bio}</p>

            <Loader />

            {this.state.photos.map(
              (picObj, e) => picObj.profile_picture ?
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
      return (
        <div>
          <Navbar />
          <div>
            <h1>{this.state.userData.firstName} {this.state.userData.lastName}</h1>
            <h4>{this.state.userData.location}</h4>
            <h4>{this.state.userData.phoneNumber}</h4>
            <h4>{this.state.userData.instagram}</h4>
            <h4>{this.state.userData.email}</h4>
            <p>{this.state.userData.bio}</p>


            {this.state.photos.map(picObj => picObj.profile_picture ? <img className="profile_picture" src={picObj.path} alt="propic" /> : <img src={picObj.path} alt="propic2"/>)}
          </div>
        </div>

      )
    }
  }
}
export default profile
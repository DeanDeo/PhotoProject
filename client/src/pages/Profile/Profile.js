import React from 'react';
import { Loader } from "../../components/Photo";
import Navbar from "../../components/Navbar";
import axios from "axios"
const uid = window.localStorage.getItem("uid")
class profile extends React.Component{

  state ={
   userData : {},
   photos: []
 }
  componentDidMount(){
    axios.get(`/api/user/findById/${uid}`).then(res=>{
      this.setState({
        userData: res.data
      })
    
    })
    axios.get(`/api/profile/populatePhotos/${uid}`).then(res=>{
      this.setState({
        photos: res.data
      })
      
    })
   }
  render(){

    
    



    return(
      <div>
      <Navbar/>
      <div>
      <Loader/>
      {this.state.photos.map(picObj=> <img src ={picObj.path}/>)}
      </div>
      </div>

    )
  }
}
export default profile
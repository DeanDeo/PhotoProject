import React from 'react';
import Navbar from '../../components/Navbar';
import { Input, TextArea, FormBtn } from "../../components/ProfileForm";
// import FormModal from '../../components/FormModal';
// import MainForm from '../../components/MainForm';
// import { Container } from 'semantic-ui-react';


class PhotogProfile extends React.Component {

  render() {
    const uId = window.localStorage.getItem("uid")

    return (
            <div>
              <Navbar />
              <h1>Photographer</h1>
              {/* <form action="/api/profile/photographer" method="post">
              <div className="form-group">

                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input type="hidden" id="uId" name="uId" value={uId}></input>
                    <input className="form-control" id="nameInput" placeholder="John Smith"></input>
                    </div>
                  <div className="form-group">
                  <label htmlFor="exampleInputEmail2">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailPhotog" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                    <div className="form-group">
                    <label htmlFor="Location">Location</label>
                    <input className="form-control" id="locationInput" placeholder="Chicago"></input>
                    </div>
                    <div className="form-group">
                    <label htmlFor="instagramLink">Instagram Link</label>
                    <input className="form-control" id="instagramInput" placeholder="@instagram"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="portfolioLink">Portfolio Link</label>
                    <input className="form-control" id="portfolioInput" placeholder="yourpage.com"></input>
                </div>

                <div className="form-group">
              <label htmlFor="bioInput">Bio</label>
              <textarea className="form-control" id="bioInput" rows="3"></textarea>
        </div>
                      <button type="photogProfile-submit" className="btn btn-primary">Submit</button>
      </form> */}
      <form>
              <Input
                // value={this.state.title}
                // onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
              />
              <Input
                // value={this.state.author}
                // onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
              />
              <Input
                // value={this.state.author}
                // onChange={this.handleInputChange}
                name="location"
                placeholder="Location (City, State) (required)"
              />
              <Input
                // value={this.state.author}
                // onChange={this.handleInputChange}
                name="phoneNumber"
                placeholder="Phone Number (Optional)"
              />
              <Input
                // value={this.state.author}
                // onChange={this.handleInputChange}
                name="instagram"
                placeholder="Instagram (Optional)"
              />
              <TextArea
                // value={this.state.synopsis}
                // onChange={this.handleInputChange}
                name="bio"
                placeholder="Bio (Optional)"
              />
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                // onClick={this.handleFormSubmit}
              >
                Save
              </FormBtn>
            </form>
            </div>
//       <div>


        
// // {/* 
// //       <FormModal>
// //       </FormModal> */}
//       </div>
      
    );
  }
}


export default PhotogProfile;
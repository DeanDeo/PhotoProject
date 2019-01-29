import React from 'react';
import Navbar from '../../components/Navbar';
import { Input, TextArea, FormBtn } from "../../components/ProfileForm";


class UserProfile extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  render() {
    return (
      <div>
        <Navbar />
          <h1>User</h1>
          {/* <form>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailUser" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Type of Photography?</label>
              <input className="form-control" id="example1" placeholder="Password"></input>
              </div>
              <div className="form-group">
              <label htmlFor="exampleInputPassword1">Sample Question?</label>
              <input className="form-control" id="example2" placeholder="Password"></input>
              </div>
              <div className="form-group">
              <label htmlFor="exampleInputPassword1">Sample Question?</label>
              <input className="form-control" id="example3" placeholder="Password"></input>
              </div>
              <p>Upload a photo for your profile.</p>
              
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
    );
  }
}

export default UserProfile;
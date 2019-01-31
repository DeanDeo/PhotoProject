import React from 'react';
import Navbar from '../../components/Navbar';
import { Input, TextArea, FormBtn } from "../../components/ProfileForm";
import API from "../../utils/API";
import { Redirect } from 'react-router-dom';
import './style.css';


class UserProfile extends React.Component {
state = {
  redirect: false,
  firstName: "",
  lastName: "",
  location: "",
  phoneNumber: "",
  instagram: "",
  bio: ""
};

componentDidMount() {
  this.loadCustomers();
}

loadCustomers = () => {
  API.getCustomers()
    .then(res =>
      this.setState({ firstName: "", lastName: "", location: "", phoneNumber: "", instagram: "", bio: "" })
    )
    .catch(err => console.log(err));
};
setRedirect = () => {
  this.setState({
    redirect: true
  })
}
renderRedirect = () => {
  if (this.state.redirect) {
    return <Redirect to="/results"/>
  }
}

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

handleFormSubmit = event => {
  event.preventDefault();
  if (this.state.firstName && this.state.lastName && this.state.location) {
    API.saveCustomer({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      location: this.state.location,
      phoneNumber: this.state.phoneNumber,
      instagram: this.state.instagram,
      bio: this.state.bio
    }, window.localStorage.getItem("id"))
      .then(res =>{ 
        this.loadCustomers()
        this.setRedirect()
      })
      .catch(err => console.log(err));
  }
};

  render() {
    return (
      <div>
        <Navbar />
          <h1>| Set Your Profile |</h1>
<form>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (City, State) (required)"
              />
              <Input
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
                name="phoneNumber"
                placeholder="Phone Number (Optional)"
              />
              <Input
                value={this.state.instagram}
                onChange={this.handleInputChange}
                name="instagram"
                placeholder="Instagram (Optional)"
              />
              <TextArea
                value={this.state.bio}
                onChange={this.handleInputChange}
                name="bio"
                placeholder="Bio (Optional)"
              />
              <FormBtn
                disabled={!(this.state.firstName && this.state.lastName && this.state.location)}
                onClick={this.handleFormSubmit}
              >
                Save
              </FormBtn>
            </form>
            {this.renderRedirect()}
      </div>
    );
  }
}

export default UserProfile;
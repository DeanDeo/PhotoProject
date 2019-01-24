import React from 'react';

class UserProfile extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  render() {
    return (
      <div>
          <h1>User</h1>
          <form>
        <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                  <label className="form-check-label" htmlFor="exampleCheck1">Are you a photographer?</label>
              </div>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
                <button type="photogProfile-submit" className="btn btn-primary">Submit</button>
</form>
      </div>
    );
  }
}

export default UserProfile;
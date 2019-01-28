import React from 'react';
import Navbar from '../../components/Navbar';
class PhotogProfile extends React.Component {
  render() {
    return (
      <div>
          <Navbar />
        <h1>Photographer</h1>
        <form>

                <button type="photogProfile-submit" className="btn btn-primary"><a href = '/chat'>Chat</a></button>
      </form>
            </div>
            );
          }
        }
        
export default PhotogProfile;
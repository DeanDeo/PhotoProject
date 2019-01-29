import React from 'react';
import { Link } from "react-router-dom";

class ResultBox extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  
  render() {
    console.log(this.props)
      const myStyles = {
          box: {
              backgroundColor: 'gray',
              height: '300px',
              width: '400px'
          }
      }
    return (
        <Link to={'./userProfile'}>
        <div>
            
            <div style={myStyles.box}>
            
                <h1>Sample box {console.log(this.props)}(photo goes here)</h1>
            <img alt='path' src={this.props.path}/>
            </div>
        </div>
        </Link>
    );
  }
}

export default ResultBox;
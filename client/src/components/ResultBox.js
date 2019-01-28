import React from 'react';

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
        <div>
            <div style={myStyles.box}>
                <h1>Sample box {console.log(this.props)}(photo goes here)</h1>
            <img src={this.props.path}/>
            </div>
        </div>
    );
  }
}

export default ResultBox;
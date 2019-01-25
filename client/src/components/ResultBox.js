import React from 'react';

class ResultBox extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  render() {
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
                <h1>Sample box (photo goes here)</h1>
            </div>
        </div>
    );
  }
}

export default ResultBox;
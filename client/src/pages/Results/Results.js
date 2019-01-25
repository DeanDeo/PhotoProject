import React from 'react';
import ResultBox from '../../components/ResultBox';

class Results extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    const myStyles = {
      results: {
         display: 'grid',
      }
  }
    return (
            <div style={myStyles.results}>
                <h1>This is our Results Page</h1>
                <ResultBox></ResultBox>
                <ResultBox></ResultBox>
                <ResultBox></ResultBox>
                <ResultBox></ResultBox>
            </div>
            );
          }
        }
        
export default Results;
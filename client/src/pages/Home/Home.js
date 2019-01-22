import React, { Component } from "react";
// import API from "../../utils/API"; //import you API functions here
import { Col, Row, Container } from "../../components/Grid";

class Home extends Component {
  state = {
    example: "some state!"
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <h1>
              Hello there! You absolutely don't have to, put if you'd like use
              the grid components to help layout your pages, feel free!
            </h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;

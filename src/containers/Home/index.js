import React, { Component } from "react";
import { Container } from "./styles";
import LoginModal from "./components/LoginModal";
import UI from "./components/UI";

class Home extends Component {
  render() {
    return (
      <Container>
        <LoginModal />
        <UI />
      </Container>
    );
  }
}

export default Home;

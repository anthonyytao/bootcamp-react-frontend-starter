import React, { Component } from "react";
import { Container } from "./styles";
import LoginModal from "./components/LoginModal";
import UI from "./components/UI";

const Content = () => {
  if (!true) {
    return (
      <React.Fragment>
        <UI />
        <LoginModal />
      </React.Fragment>
    );
  }
  return <UI />;
};

class Home extends Component {
  render() {
    return (
      <Container>
        <Content />
      </Container>
    );
  }
}

export default Home;

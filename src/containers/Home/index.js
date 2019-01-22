import React, { Component } from "react";
import { Container } from "./styles";
import LoginModal from "./components/LoginModal";
import UI from "./components/UI";
<<<<<<< HEAD

const Content = () => {
  if (!localStorage.getItem('token')) {
    return (
        <React.Fragment>
          <UI />
          <LoginModal />
        </React.Fragment>
      );
  }
  return <UI />
}
=======
>>>>>>> 6863fcbb1bb81a3a7d4c0894a9f090fce0968c86

class Home extends Component {
  render() {
    return (
      <Container>
<<<<<<< HEAD
        <Content />
=======
        {/* <LoginModal /> */}
        <UI />
>>>>>>> 6863fcbb1bb81a3a7d4c0894a9f090fce0968c86
      </Container>
    );
  }
}

export default Home;

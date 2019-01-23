import React, { Component } from 'react'
import { LoginBox, Shadow } from './styles'
import Login from './components/Login'
import SignUp from './components/SignUp'

const Content = ({ loginMode, toggleLoginMode }) => {
  if (loginMode) {
    return <Login changeMode={toggleLoginMode} />
  }
  
  return <SignUp changeMode={toggleLoginMode} />
}

class LoginModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginMode: true
    }
  }

  toggleLoginMode = () => {
    this.setState({ loginMode: !this.state.loginMode })
  }

  render() {
    return (
      <Shadow>
        <LoginBox>
          <Content
            loginMode={this.state.loginMode}
            toggleLoginMode={this.toggleLoginMode}
          />
        </LoginBox>
      </Shadow>
    )
  }
}

export default LoginModal

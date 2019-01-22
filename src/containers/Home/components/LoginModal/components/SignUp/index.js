import React, { Component } from 'react'
import { Title, LineInput, SubmitButton, SecondaryOptionText } from './styles'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
<<<<<<< HEAD
      name: '',
      email: '',
      password: ''
    }
=======
      displayName: "",
      email: "",
      password: ""
    };
>>>>>>> 6863fcbb1bb81a3a7d4c0894a9f090fce0968c86
  }

  onChange = (key, e) => {
    this.setState({ [key]: e.target.value })
  }

  SIGN_UP = gql`
    mutation createUser($input: UserInput!) {
      createUser(input: $input) {
        message
        success
        token
      }
    }
  `

  render() {
    return (
<<<<<<< HEAD
      <Mutation
        mutation={this.SIGN_UP}
        onCompleted={data => {
          if (data.createUser.success) {
            const {
              createUser: { token }
            } = data
            localStorage.setItem('token', token)
            this.props.history.push('/users')
            this.props.authenticateUser()
          }
          return <div>{data.createUser.message} </div>
        }}
      >
        {(signUp, { loading, error }) => {
          // this loading state will probably never show, but it's helpful to
          // have for testing
          if (loading) return <p> Loading </p>
          if (error) return <p>An error occurred</p>
          return (
            <React.Fragment>
              <Title>Sign Up</Title>
              <LineInput
                placeholder="Userame"
                onChange={e => this.onChange("displayName", e)}
              />
              <LineInput
                placeholder="Email"
                onChange={e => this.onChange("email", e)}
              />
              <LineInput
                placeholder="Password"
                onChange={e => this.onChange("password", e)}
                type="password"
              />
              <SubmitButton
                onClick={() => {
                  signUp({
                    variables: {
                      input: {
                        email: this.state.email,
                        password: this.state.password,
                        name: this.state.name
                      }
                    }
                  })
                  this.setState({ name: '' })
                  this.setState({ email: '' })
                  this.setState({ password: '' })
                }}
              >
                Submit
              </SubmitButton>
              <SecondaryOptionText onClick={this.props.changeMode}>
                Already have an account? Login here.
              </SecondaryOptionText>
            </React.Fragment>
          )
        }}
      </Mutation>
    )
=======
      <React.Fragment>
        <Title>Nice to meet you!</Title>
        <LineInput
          placeholder="Username"
          onChange={e => this.onChange("displayName", e)}
        />
        <LineInput
          placeholder="Email"
          onChange={e => this.onChange("email", e)}
        />
        <LineInput
          placeholder="Password"
          onChange={e => this.onChange("password", e)}
          type="password"
        />
        <SubmitButton>Get Started</SubmitButton>
        <SecondaryOptionText onClick={this.props.changeMode}>
          Or Login
        </SecondaryOptionText>
      </React.Fragment>
    );
>>>>>>> 6863fcbb1bb81a3a7d4c0894a9f090fce0968c86
  }
}

export default SignUp;

import React, { Component } from "react";
import { Title, LineInput, SubmitButton, SecondaryOptionText } from "./styles";
import { Mutation } from "react-apollo";
import LOGIN from "./mutations";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = (key, e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={LOGIN}
        variables={{
          input: { email: this.state.email, password: this.state.password }
        }}
        onCompleted={data => {
          if (data.loginUser.success) {
            const {
              loginUser: { token }
            } = data;
            localStorage.setItem("token", token);
            this.props.history.push("/users");
            this.props.authenticateUser();
          }
          return <div>{data.loginUser.error.message} </div>;
        }}
      >
        {(loginUser, { loading, error }) => {
          if (loading) return <p> Loading </p>;
          if (error) return <p>An error occurred</p>;
          return (
            <React.Fragment>
              <Title>Login</Title>
              {this.state.error && <p>{this.state.error} </p>}
              <LineInput
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                placeholder="Email"
                onChange={e => this.onChange("email", e)}
              />
              <LineInput
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                placeholder="Password"
                onChange={e => this.onChange("password", e)}
                type="password"
              />
              {this.state.email && this.state.password && (
                <SubmitButton onClick={loginUser}><i class="fa fa-check"></i></SubmitButton>
              )}
              {!(this.state.email && this.state.password) && (
                <SecondaryOptionText onClick={this.props.changeMode}>
                  Don't have an account? Sign up here.
                </SecondaryOptionText>
              )}
            </React.Fragment>
          );
        }}
      </Mutation>
    );
  }
}

export default Login;

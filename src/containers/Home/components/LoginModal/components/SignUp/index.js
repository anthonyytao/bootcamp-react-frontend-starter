import React, { Component } from "react";
import { Title, LineInput, SubmitButton, SecondaryOptionText } from "./styles";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router";
import CREATE_USER from "./mutations";

class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
        mutation={CREATE_USER}
        variables={{
          input: {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          }
        }}
        onCompleted={data => {
          if (data.createUser.success) {
            const {
              createUser: { token }
            } = data;
            localStorage.setItem("token", token);
            this.props.history.push("/users");
          }
          return <div>{data.createUser.error} </div>;
        }}
      >
        {(createUser, { loading, error }) => {
          if (loading) return <p> Loading </p>;
          if (error) return <p>An error occurred</p>;
          return (
            <React.Fragment>
              <Title>Sign Up</Title>
              <LineInput
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                placeholder="Username"
                onChange={e => this.onChange("name", e)}
              />
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
                <SubmitButton onClick={createUser}>
                  <i class="fa fa-check" />
                </SubmitButton>
              )}
              {!(this.state.email && this.state.password) && (
                <SecondaryOptionText onClick={this.props.changeMode}>
                  Already have an account? Login here.
                </SecondaryOptionText>
              )}
            </React.Fragment>
          );
        }}
      </Mutation>
    );
  }
}

const SignUp = withRouter(SignUpComponent);
export default SignUp;

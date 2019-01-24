import React, { Component } from "react";
import { Title, LineInput, SubmitButton, SecondaryOptionText } from "./styles";
import { Mutation } from "react-apollo";
import CREATE_USER from "./mutations";

class SignUp extends Component {
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
            this.props.authenticateUser();
          }
          return <div>{data.createUser.error.message} </div>;
        }}
      >
        {(createUser, { loading, error }) => {
          if (loading) return <p> Loading </p>;
          if (error) return <p>An error occurred</p>;
          return (
            <React.Fragment>
              <Title>Sign Up</Title>
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
              {this.state.email && this.state.password && (
                <SubmitButton onClick={createUser}>&#x2713;</SubmitButton>
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

export default SignUp;

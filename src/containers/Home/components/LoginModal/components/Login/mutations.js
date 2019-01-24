import gql from "graphql-tag";

const LOGIN = gql`
  mutation loginUser($input: LoginInput!) {
    loginUser(input: $input) {
      success
      token
      error {
        message
      }
    }
  }
`;

export default LOGIN;

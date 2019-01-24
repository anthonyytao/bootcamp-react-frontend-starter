import gql from "graphql-tag";

const LOGIN = gql`
  mutation loginUser($input: LoginInput!) {
    loginUser(input: $input) {
      success
      user {
        id
      }
      token
      error {
        message
      }
    }
  }
`;

export default LOGIN;

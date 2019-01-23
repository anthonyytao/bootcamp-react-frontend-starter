import gql from "graphql-tag";

const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      success
      User {
        name
        email
      }
      token
      error {
        message
      }
    }
  }
`;

export default CREATE_USER;
import gql from "graphql-tag";

const GET_NUMBERS = gql`
  query number($input: numberQuery) {
    number(input: $input) {
      error {
        message
      }
      success
      number
    }
  }
`;

export default GET_NUMBERS;

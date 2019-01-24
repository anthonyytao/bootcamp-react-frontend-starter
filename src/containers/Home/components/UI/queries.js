import gql from "graphql-tag";

const GET_DRINKS = gql`
  query drinks($input: drinksQuery) {
    drinks(input: $input) {
      error {
        message
      }
      success
      drinks {
        lat
        long
      }
    }
  }
`;

export default GET_DRINKS;

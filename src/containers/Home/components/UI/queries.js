import gql from "graphql-tag";

const GET_DRINKS = gql`
  query drinks($input: Location) {
    drinks(input: $input) {
      error {
        message
      }
      success
      drinks {
        Drink {
          lat
          long
        }
      }
    }
  }
`;

export default GET_DRINKS;

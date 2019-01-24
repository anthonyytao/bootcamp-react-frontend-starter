import gql from "graphql-tag";

const GET_NUMBERS = gql`
  query number($input: drinksQuery) {
    number(input: $input) {
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

export default GET_NUMBERS;

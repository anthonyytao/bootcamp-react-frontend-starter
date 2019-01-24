import gql from "graphql-tag";

const PUSH_COORDINATES = gql`
  mutation createDrink($input: CreateDrinkInput!) {
    createDrink(input: $input) {
      drink {
        Drink {
          lat
          long
        }
      }
      error {
        message
      }
    }
  }
`;

export default PUSH_COORDINATES;

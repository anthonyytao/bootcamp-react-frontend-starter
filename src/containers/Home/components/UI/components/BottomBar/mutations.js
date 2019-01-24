import gql from "graphql-tag";

const CREATE_DRINK = gql`
  mutation createDrink($input: CreateDrinkInput!) {
    createDrink(input: $input) {
      drink {
        lat
        long
      }
      error {
        message
      }
    }
  }
`;

export default CREATE_DRINK;

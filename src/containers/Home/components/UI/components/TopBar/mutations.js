import gql from "graphql-tag";

const ADD_FRIEND = gql`
  mutation addFriend($input: FriendInput!) {
    addFriend(input: $input) {
      error {
        message
      }
      success
      user {
        id
      }
    }
  }
`;

export default ADD_FRIEND;

import gql from 'graphql-tag'

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      email
      password
    }
  }
`

export default CREATE_USER

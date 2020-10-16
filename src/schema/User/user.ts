import { gql } from "apollo-server-express"
export default gql`
    extend type Query {
        users: [User!]
    }

    type User {
        _id: String
        firstName: String
        lastName: String
        phoneNumber: String
        email: String
    }
`
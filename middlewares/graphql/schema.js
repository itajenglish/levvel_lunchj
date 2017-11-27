import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers';

const typeDefs = `
type User {
    id: Int,
    email: String
}

type Place {
    id: Int
    name: String
    location: String
}

type Vote {
    id: Int
    upvote: Boolean
    downvote: Boolean
}

type Query {
    user(email: String): User
    place(name: String, location: String): Place
    vote(upvote: Boolean, downvote: Boolean): Vote
}

type Mutation {
    createUser(email: String): User
}

schema {
    query: Query
    mutation: Mutation
}
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
export default schema;
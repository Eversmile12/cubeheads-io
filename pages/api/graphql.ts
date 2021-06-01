import { ApolloServer } from "apollo-server-micro"
import { resolvers } from "./graphql/resolvers"
import { context } from "./graphql/context"
import { typeDefs } from "./graphql/typeDefs"


const server = new ApolloServer({typeDefs, resolvers, context})


const handler = server.createHandler({path: "/api/graphql"})

export const config = {
    api:{
        bodyParser: false,
        introspection: true,
    }
}


export default handler;
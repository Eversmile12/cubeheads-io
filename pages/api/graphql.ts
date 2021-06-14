import { ApolloServer } from "apollo-server-micro"
import Cors from 'micro-cors'
import { resolvers } from "./graphql/resolvers"
import { context } from "./graphql/context"
import { typeDefs } from "./graphql/typeDefs"

const cors = Cors({
    origin: ['https://www.cubeheads.io/']
})
const server = new ApolloServer({typeDefs, resolvers, context})


const handler = server.createHandler({
    path: "/api/graphql",
    
})

export const config = {
    api:{
        bodyParser: false,
        introspection: true,
    }
}


export default cors(handler);
import { ApolloServer } from "apollo-server-micro"
import Cors from 'micro-cors'
import { resolvers } from "./graphql/resolvers"
import { context } from "./graphql/context"
import { typeDefs } from "./graphql/typeDefs"

const cors = Cors({
    origin: 'https://cubeheads-io-49ij2fzcn-eversmile12.vercel.app/'
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


export default handler;
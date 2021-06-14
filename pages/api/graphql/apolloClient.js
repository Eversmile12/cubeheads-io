import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: "https://cubeheads.io/api/graphql",
    cache: new InMemoryCache()
})


export default client;
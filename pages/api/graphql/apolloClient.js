import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
const defaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }
  const httpLink = createHttpLink({
    uri: "https://www.cubeheads.io/api/graphql",
  
  })
const client = new ApolloClient({
    uri: "https://www.cubeheads.io/api/graphql",
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
})


export default client;
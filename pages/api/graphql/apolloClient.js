import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
  const httpLink = createHttpLink({
    uri:  "https://cubeheads.io/api/graphql",
    credentials: 'include',
  })
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})


export default client;
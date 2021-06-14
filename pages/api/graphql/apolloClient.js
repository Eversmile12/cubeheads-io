import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
  const httpLink = createHttpLink({
    uri: "https://cubeheads-h7otftipu-eversmile12.vercel.app/api/graphql",
    credentials: 'include'
  })
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})


export default client;
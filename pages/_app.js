import '../styles/globals.css'
import MainLayout from "../components/layouts/mainLayout"
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  DefaultOptions
} from '@apollo/client'

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
  uri: "https://cubeheads.io/api/graphql",

})

const client = new ApolloClient({
  uri: "https://cubeheads.io/api/graphql",
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={ client }>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  ) 
}

export default MyApp

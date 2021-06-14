import '../styles/globals.css'
import MainLayout from "../components/layouts/mainLayout"
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  DefaultOptions
} from '@apollo/client'

const httpLink = createHttpLink({
  uri: "https://www.cubeheads.io/api/graphql",
  credentials: 'include',
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  
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

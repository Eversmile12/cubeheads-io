import '../styles/globals.css'
import LandingPageLayout from "../components/layouts/landing-page"

function MyApp({ Component, pageProps }) {
  return (
    <LandingPageLayout>
      <Component {...pageProps} />
    </LandingPageLayout>
  ) 
}

export default MyApp

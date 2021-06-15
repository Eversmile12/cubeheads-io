import Navbar from "./navbar"
import Footer from "./footer"
import Head from "next/head"

const LandingPageLayout = ({children}) => {
    return (
        <main className="wrapper">
            <Head>
                <link rel="icon" href="/logo-type-black.png"></link>
                <script defer data-domain="cubeheads.io" src="https://plausible.io/js/plausible.js"></script>
            </Head>
            <Navbar></Navbar>
                {children}
            <Footer></Footer>
        </main>
    )
}

export default LandingPageLayout
import Navbar from "./navbar"
import Footer from "./footer"
import Head from "next/head"

const LandingPageLayout = ({children}) => {
    return (
        <div className="wrapper">
            <Head>
                <link rel="icon" href="/logo-type-black.png"></link>
            </Head>
            <Navbar></Navbar>
                {children}
            <Footer></Footer>
        </div>
    )
}

export default LandingPageLayout
import Navbar from "./navbar"
import Footer from "./footer"

const LandingPageLayout = ({children}) => {
    return (
        <div className="wrapper">
            <Navbar></Navbar>
                {children}
            <Footer></Footer>
        </div>
    )
}

export default LandingPageLayout
import Navbar from "../partials/navbar"
import Footer from "../partials/footer"

const LandingPageLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
                <div>

                </div>
                {children}
            <Footer></Footer>
        </div>
    )
}

export default LandingPageLayout
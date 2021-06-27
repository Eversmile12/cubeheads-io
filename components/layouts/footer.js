import styles from "../../styles/Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const thisYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div>
                
            </div>
            <p className={styles.copyrights}>cubeheads.io © {thisYear}</p>
            <a href="https://twitter.com/CubeheadsHQ"><FontAwesomeIcon height="18px" style={{"color" : "#1DA1F2", "marginTop": ".5rem"}} icon={faTwitter}></FontAwesomeIcon></a>
        </footer>
    )
}


export default Footer;
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Navbar.module.css'



export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className="nav__logo">
                <Image src="/logo-full-black.png" width="125" height="29"></Image>
            </div>
        </nav>
    )
}

export default Navbar;
import Link from 'next/link'
import styled from "styled-components"
import { NavButton } from "../UIElements/buttons"


const NavBar = styled.nav`
    display: flex;
    padding: 2rem 5rem;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 728px){
        padding: 1rem 3rem 1rem 2rem
    }
`
const Logo = styled.img`
    cursor: pointer;
`


export const Navbar = () => {
    return (
        <header>
            <NavBar>
                <div className="nav-logo">
                    <Link href="/"><Logo alt="cubeheads logo" src="/logo-full-black.png" width="125" height="29"></Logo></Link>
                </div>
                <div>
                    {/* <ul style={{"display" : "inline-block"}}>
                        <li className={styles.listItem}><Link href="#">list a job</Link></li>
                        <li className={styles.listItem}><Link href="#">studios</Link></li>
                    </ul> */}
                        
                    <NavButton>Weekly Jobs</NavButton>
                </div>
            </NavBar>
        </header>
        
    )
}

export default Navbar;
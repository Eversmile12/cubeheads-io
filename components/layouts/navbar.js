import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styled from "styled-components"



const NavBar = styled.nav`
    display: flex;
    padding: 3rem 5.5rem;
    justify-content: space-between;
    align-items: center;
`

const NavButton = styled.button`
    background-color: #2789A2;
    border-radius: 3px;
    color: #FFFFFE;
    padding: .9rem 2rem;
    border: none;
    font-weight: 600;
    cursor: pointer;

    :hover{
        background: #3196b0;
    }

`

export const Navbar = () => {
    return (
        <header>
            <NavBar>
                <div className="nav__logo">
                    <Image src="/logo-full-black.png" width="125" height="29"></Image>
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
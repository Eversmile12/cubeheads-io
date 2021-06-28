import styles from "../styles/staticHeader.module.css"
import styled from "styled-components"
import {CTAButton} from "../components/UIElements/buttons"
import Image from "next/image"
import Link from "next/link"
const ErrorMessageContainer = styled.div`
    background-color: #0E1526;
    overflow: hidden;
    height: 85vh;
    color: #FFFFFA;
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    border-radius: 4px;
    padding: 5rem;

`
const ErrorCode = styled.h2`
    font-size: 7rem;

    @media screen and (max-width: 667px) {

        font-size: 5rem;
        align-self: center;

    }

`
export default function Custom404(){
    return(
        <div>
            
                <ErrorMessageContainer>
                    <div style={{"alignSelf" : "center"}}>
                        <ErrorCode className="mb-s">This page is gone.</ErrorCode>
                        <h3 className="mb-l">But there are hundreds of jobs waiting for you!</h3>
                        <Link href="/" passHref><CTAButton >Search other jobs</CTAButton></Link>
                    </div>
                    <div className={styles.imgContainer} >
                      <Image className={styles.headerImage} src="/404-image.png" height="600" width="600"></Image>
                    </div>
                    
                </ErrorMessageContainer>
                    
            
            
        </div>
    )
}
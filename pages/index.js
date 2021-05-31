import SubscribeForm from "../components/subscribe-box"
import ContentContainer from "../components/ContentContainer"
import XlHeader from "../components/HeaderXl"
import styles from "../styles/Landing.module.css"
import DescriptionBox from "../components/DescriptionBox"
import Head from "next/head"
export default function landingLaunch(){

 
    return(
        <ContentContainer>
            <Head>
            {/* https://css-tricks.com/essential-meta-tags-social-media/ */}
                <title>cubeheads.io | Land your dream studio</title>
                <link rel="icon" href="/logo-type-black.png"></link>
                <meta property="og:title" content="cubeheads.io | Game dev jobs list"/>
                <meta property="og:description" content="Land your dream job in the Game Dev Industry"/>
                <meta property="og:url" content="http://euro-travel-example.com/index.htm"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="keywords" content="gamedev, game development, jobs, work"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <XlHeader>Work in the Game Industry, <br></br><span>Land your dream Studio.</span></XlHeader>
            <img className= {styles.image} src="/rocket-saly.png" ></img>
            
            <div className={styles.textContainer} >
                <DescriptionBox></DescriptionBox>
                <p style={{"marginTop" : "2rem"}}><strong>Land your dream Game studio, create the next masterpiece.</strong></p>
                 
                
                <SubscribeForm></SubscribeForm>
            </div>
           
        </ContentContainer>
        
    )
}
import {MainButton} from "../UIElements/buttons"
import styled from "styled-components"
import Link from "next/link"

const JobListContainer = styled.div`
  width: 70%;
  margin: 4rem auto;
  @media screen and (max-width: 1024px) {
      width: 100%;
  }
 
`

const ListItemContainer = styled.li`
    padding: 1rem;
    display: flex;
    align-items: center;
    background: #fff;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.18);
    border-radius: 3px;
    padding: 1.5rem;
    :not(last-child){
        margin-bottom: 1rem;
    }
    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
    
`


const TextContainer = styled.div`
    padding: 0 1rem;
    margin: 2rem 0 2rem 0;
    text-align: justify;
  
 
`

const ImageContainer = styled.a`
    @media screen and (max-width: 1024px) {
      width: 100%;
      background-color: #0E1526;
      padding: 1rem
  }
 
`
const JobTitle = styled.h2`
    font-size: 1.6rem;

    
`

const JobInfo = styled.p`
    font-size: 1.3rem;
    color: rgba(72, 66, 79, 0.9);
    font-weight: 600;
`

const JobDescription = styled.p`
    font-size: 1.4rem;
    text-align: justify

    
`
const StudioLogo = styled.img`
    width: 150px;
    height: 150px;
    display: block;
    margin: 0 auto;

   
`


export default function JobListItem({keyValue ,jobRole, jobLocation, studio, jobDescription, studioLogo, studioId}){
    return(
        <ListItemContainer key={keyValue}>
            <ImageContainer href={"/jobs/" + keyValue}>
                <StudioLogo alt={studio + " logo"} src={studioLogo.length > 1 ? studioLogo : "/studio-logo-placeholder.png" }></StudioLogo>
            </ImageContainer>
          
            
            <TextContainer className="mr-m">
                <div >
                    <JobTitle>{jobRole}</JobTitle>
                        <Link href={"/studios/" + studioId }><JobInfo>{studio}</JobInfo></Link>
                    <JobInfo>{jobLocation}</JobInfo>
                </div>
                <JobDescription>{jobDescription.substring(0,150)}.. </JobDescription>
            
            </TextContainer>
                <MainButton href={"/jobs/" + keyValue}>Learn More</MainButton>
        </ListItemContainer>
    )
}

export { JobListContainer }
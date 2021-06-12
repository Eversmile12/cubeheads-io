import {MainButton} from "../UIElements/buttons"
import styled from "styled-components"


const JobListContainer = styled.div`
  width: 70rem;
  margin: 4rem auto;
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

    
`
const JobTitle = styled.h3`
    font-size: 1.6rem;
`

const JobInfo = styled.p`
    font-size: 1.3rem;
    color: rgba(72, 66, 79, 0.7);
    font-weight: 600;
`

const JobDescription = styled.p`
    font-size: 1.4rem;
    text-align: justify
`

export default function JobListItem({keyValue ,jobRole, jobLocation, studio, jobDescription, studioLogo, studioId}){
    return(
        <ListItemContainer key={keyValue}>
            <img className="mr-s" src={studioLogo} width="150" height="150"></img>
            <div className="mr-m">
                <div >
                    <JobTitle>{jobRole}</JobTitle>
                    <a href={"/studios/" + studioId }><JobInfo>{studio}</JobInfo></a>
                    <JobInfo>{jobLocation}</JobInfo>
                </div>
                <JobDescription>{jobDescription.substring(0,150)}.. </JobDescription>
            
            </div>
                <MainButton href={"/jobs/" + keyValue}>Learn More</MainButton>
        </ListItemContainer>
    )
}

export { JobListContainer }
import Link from "next/link"
import styled from "styled-components"



const BreadcrumbsContainer = styled.div`
        margin-bottom: 2rem;
    background: #0E1526;
    padding: 1.2rem 1rem 1.2rem 1rem;
    /* width: 80%; */
    border-radius: 0 0 3px 3px;
    color: #fffffa5c;
    text-align: left;
    width: 60%;
    margin: 0 auto;

    @media screen and (max-width: 720px){
        width: 100%;
        border-radius: 0;
        text-align: center;
        padding-top: 2rem;
    }
`


const BreadcrumbsItem = styled.a`
    margin: 0 1rem;
    color: #FFFFFA;
    cursor: pointer;
    @media screen and (max-width: 720px){
        margin: 0;
    }

   

`




export default function Breadcrubms({studio,studioId, job, jobId}){
    let studioURL = "#"
    let studioClassName = "disabled"
    if(job){
        studioURL =  `/studios/${studioId}`
        let studioClassName = ""
        
    }
    return (
    <BreadcrumbsContainer>
        <BreadcrumbsItem href="/">home</BreadcrumbsItem> {studio ? <span>/<Link href={studioURL} className={studioClassName} passHref><BreadcrumbsItem className={!job && "disabled"}>{studio}</BreadcrumbsItem></Link></span> : ""} {job ? <span>/<BreadcrumbsItem className="disabled">{job}</BreadcrumbsItem></span> : ""}
    </BreadcrumbsContainer>
    )
}
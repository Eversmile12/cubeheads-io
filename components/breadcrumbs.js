import styled from "styled-components"



const BreadcrumbsContainer = styled.div`
    margin-bottom: 2rem;
    background: #0E1526;
    padding: .5rem 1rem;
    width: 80%;
    border-radius: 3px;
    color: #fffffa5c;
    text-align: left;
    @media screen and (max-width: 720px){
        width: 100%;
    }
`


const BreadcrumbsItem = styled.a`
    margin: 0 1rem;
    cursor: pointer;
    color: #FFFFFA;

    @media screen and (max-width: 720px){
        margin: 0;
    }

`




export default function Breadcrubms({studio,studioId, job, jobId}){
    return (
    <BreadcrumbsContainer>
        <BreadcrumbsItem href="/">home</BreadcrumbsItem> {studio ? <span>/ <BreadcrumbsItem href={"/studios/" + studioId}>{studio}</BreadcrumbsItem></span> : ""} {job ? <span>/<BreadcrumbsItem href={"/jobs/"+ jobId }>{job}</BreadcrumbsItem></span> : ""}
    </BreadcrumbsContainer>
    )
}
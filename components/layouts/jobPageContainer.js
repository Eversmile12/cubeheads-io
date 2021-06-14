import styled from "styled-components"
const Container = styled.div`
    margin: 6rem auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(180deg, #FCFCFC 0%, rgba(252, 252, 252, 0) 100%);
    text-align: justify;
    line-height: 1.8em;
    @media screen and (max-width: 796px){
        width: 80%;
    }
`

export default function JobPageContainer({children}){
    return (
        <Container className="content-wrapper">
            { children }
        </Container>
    )
}
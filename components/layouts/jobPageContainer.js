import styled from "styled-components"
const Container = styled.main`
    background: linear-gradient(180deg, #FCFCFC 0%, rgba(252, 252, 252, 0) 100%);

`

const Content = styled.div`
    margin: 4rem auto;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    line-height: 1.8em;
    @media screen and (max-width: 950px){
        width: 80%;
    }
`

export default function JobPageContainer({children}){
    return (
        <Container className="content-wrapper">
        <Content>
            { children }
        </Content>
            
        </Container>
    )
}
import styled from "styled-components"
const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, #FCFCFC 0%, rgba(252, 252, 252, 0) 100%);
`

export default function StandardContentContainer({children}){
    return (
        <Container className="content-wrapper">
            { children }
        </Container>
    )
}
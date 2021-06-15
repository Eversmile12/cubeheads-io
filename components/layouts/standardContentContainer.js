import styled from "styled-components"
const Container = styled.main`
    margin: 4rem auto;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export default function StandardContentContainer({children}){
    return (
        <Container className="content-wrapper">
            { children }
        </Container>
    )
}
import styled from "styled-components" 

const SubmitButton = styled.div`
    display: inline-block;
    font-size: 1.3rem;
    background:  #FF305E;
    font-weight: 600;
    width: 98%;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
    text-align: center;
    @media screen and (max-width: 667px) {
        font-size: 1.6rem;
        padding: 1.5rem .8rem;
        
    }
`

const NavButton = styled.button`
background-color: #FF305E;
border-radius: 3px;
color: #FFFFFA;
padding: .9rem 2rem;
border: none;
font-weight: 600;
cursor: pointer;

:hover{
    background: #3196b0;
}

`

const FilterButton = styled.button`
    display: inline-block;
    font-size: 1.3rem;
    background:  #0E1526;
    color: #FFFFFA;
    width: 80%;
    font-weight: 600;
    padding: .8rem 2rem;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    @media screen and (max-width: 667px) {
        width: 100%;
        margin-top:1rem;
        padding: 1rem 2rem;
    }
`

const MainButton = styled.a`
    display: inline-block;
    text-align: center;
    font-size: 1.3rem;
    background: #0E1526;
    color: #FFFFFA;
    font-weight: 600;
    padding: .8rem 1rem;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    min-width: 10rem;
`


const CTAButton = styled.a`
background-color: #FF305E;
border-radius: 3px;
color: #FFFFFA;
padding: 1rem 1.5rem;
border: none;
font-size: 1.4rem;
cursor: pointer;
font-weight: 600;
`
export { SubmitButton, FilterButton, MainButton, NavButton, CTAButton }
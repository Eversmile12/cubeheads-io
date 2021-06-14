import styled from "styled-components" 

const SubmitButton = styled.div`
    display: inline-block;
    font-size: 1.3rem;
    background:  #FF305E;
    font-weight: 600;
    padding: 1rem 1.5rem;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    @media screen and (max-width: 667px) {
        width: 50%;
        padding: 1rem .8rem;
        
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
padding: .9rem 2rem;
border: none;
font-size: 1.3rem;
cursor: pointer;
`
export { SubmitButton, FilterButton, MainButton, NavButton, CTAButton }
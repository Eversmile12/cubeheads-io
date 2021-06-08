import styled from "styled-components" 

const SubmitButton = styled.div`
    display: inline-block;
    font-size: 1.3rem;
    background:  linear-gradient(90.99deg, #FF976A -70.12%, #B5627C 71.87%);
    padding: 1rem 1.5rem;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
`



const FilterButton = styled.button`
    display: inline-block;
    font-size: 1.3rem;
    background:  #324473;
    color: #FFFFFA;
    width: 31rem;
    font-weight: 600;
    padding: .8rem 2rem;
    border: none;
    cursor: pointer;
`

const MainButton = styled.button`
    display: inline-block;
    font-size: 1.3rem;
    background: #324473;
    color: #FFFFFA;
    font-weight: 600;
    padding: .8rem 1rem;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    min-width: 10rem;
`
export { SubmitButton, FilterButton, MainButton }
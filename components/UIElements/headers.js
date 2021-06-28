import styled from "styled-components" 

const XlHeader = styled.h1`
    font-size: 4.8rem;
    letter-spacing: 2px;
    color: #FF305E;

    @media (max-width: 768px){
        font-size: 4rem;
        max-width: 100%;
        margin-bottom: 2rem
    }
     
`;



const TitleHeader = styled.h1`
    font-size: 4rem;
    letter-spacing: 2px;
    color: #FF305E;
    @media (max-width: 768px){
        font-size: 2rem;
        max-width: 80%;
        margin-bottom: 2.5rem
    }
     
`;

export {XlHeader, TitleHeader}

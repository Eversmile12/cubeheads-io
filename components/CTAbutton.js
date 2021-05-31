import styled from "styled-components"

const CTAButton = styled.button`
    font-size: 1.4rem;
    position: relative;
    padding: 1rem;
    border-radius: 0 4px 4px 0;
    border: 3px solid #FEAA65;
    background: linear-gradient(229deg, #FEAA65 60%, #FF976A 160%);
    color: #FFFFFE;
    cursor: pointer;

    :before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(229deg, #FEAA65 60%, #FF976A 160%);
        opacity:0;
        border-radius: inherit;
    }
    @keyframes CTAButton{
        0% {
            opacity: .8; 
            
        }
        100%{
            opacity:0;
            transform: scale(1.2)
        }
    }

    :focus{
        outline: none;
        transform: scale(1.1)
    }

    :hover :before{
        animation-name: CTAButton;
        animation-duration: .5s;
    }

    @media (max-width: 768px){
        display: block;
        margin-top: 2rem;
        width: 100%;
    }
`;

export default CTAButton;
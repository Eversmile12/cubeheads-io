import styled from "styled-components"

const FormInput = styled.input`
    padding: 1rem;
    width: 20%;
    min-width: 30rem;
    border: 3px solid #FEAA65;
    font-weight: 600;
    background: #fff;
    font-size: 1.4rem;
    :focus{
        outline: none;
    }

    @media (max-width: 768px){
        width: 100%;
    }
`;


export default FormInput;

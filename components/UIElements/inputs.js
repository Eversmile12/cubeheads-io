import styled from "styled-components"


const InputContainer = styled.div`
    display: inline-block;
    width: 40%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 667px) {
        &:first-child{
            margin-right: 3rem;
        }
        width: 100%;
        margin-top: 1rem;
    }
   
   

`


const FormInput = styled.input`
    margin-top: 4rem;
    padding: 1rem;
    width: 45%;
    border: none;
    background: #fff;
    font-size: 1.3rem;
    :focus{
        outline: none;
    }
    @media screen and (max-width: 667px){
        width: 52%;
        padding: 1.5rem;
    }



`;

const FilterTextInputLabel = styled.label`
    border: 1px solid #E1E1E1;
    padding: 1rem .7rem;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius:  4px 0 0 4px;
    display: inline-block;
    width: 13%;

    @media screen and (max-width: 1220px ){
        width: 20%
    }
   
`

const FilterTextInputPartial = styled.input`
    padding: 1rem;
    border-radius: 0 4px 4px 0;
    border: 1px solid #E1E1E1;
    border-left: 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: #48424F;
    width: 67%;
    :focus{
        outline: none;
    }
    ::placeholder{
        color: rgba(72,66,79,.5);
    }

    @media screen and (max-width: 1220px ){
        width: 60%
    }
    @media screen and (max-width: 860px ){
        width: 80%;
    }
    
    @media screen and (max-width: 667px) {
        width:100%;
    }

}



`

const FilterDropDownPartial = styled.select`
    padding: .7rem;
    border: 1px solid #E1E1E1;
    border-radius: 4px;
    width: 80%;
    :focus{
        outline: none;
    }
`

function FilterTextInput({placeholder, context, value, onChangeHandler, className }){
    return(
        <InputContainer className={className}>
            <FilterTextInputLabel >
                {context}
            </FilterTextInputLabel> 
            <FilterTextInputPartial onChange={onChangeHandler} value={value} placeholder={placeholder}></FilterTextInputPartial>
        </InputContainer>
        
        
    )
}

function FilterDisabledInput({placeholder, context, value, onChangeHandler, className }){
    return(
        <InputContainer className={className}>
            <FilterTextInputLabel  for={context} >
                {context}
            </FilterTextInputLabel> 
            <FilterTextInputPartial id={context} className="disabled" disabled onChange={onChangeHandler} value={value} placeholder={placeholder}></FilterTextInputPartial>
        </InputContainer>
        
        
    )
}



function FilterDropDown({className}){
    return (
        <InputContainer className={className}>
            <FilterDropDownPartial defaultValue = "Location" >
                <option value="Location" disabled>Location</option>        
                <option value="placeholder">placeholder</option>
                <option value="placeholder">placeholder</option>
                <option value="placeholder">placeholder</option>
            </FilterDropDownPartial>
        </InputContainer>
       
    )
}

export { FormInput, FilterTextInput, FilterDisabledInput, InputContainer };
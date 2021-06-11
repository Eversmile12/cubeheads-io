import styled from "styled-components"

const FormInput = styled.input`
    padding: 1rem;
    width: 20%;
    border: none;
    min-width: 30rem;
    background: #fff;
    font-size: 1.3rem;
    :focus{
        outline: none;
    }

    @media (max-width: 768px){
        width: 100%;
    }
`;

const FilterTextInputLabel = styled.label`
    border: 1px solid #E1E1E1;
    padding: .75rem;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius:  4px 0 0 4px;
    width: 5rem;
`

const FilterTextInputPartial = styled.input`
    padding: .75rem;
    border-radius: 0 4px 4px 0;
    border: 1px solid #E1E1E1;
    border-left: 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: #48424F;
    width: 25rem;
    :focus{
        outline: none;
    }
    ::placeholder{
        color: rgba(72,66,79,.5);
    }


`


const FilterDropDownPartial = styled.select`
    padding: .7rem;
    width: 30rem;
    border: 1px solid #E1E1E1;
    border-radius: 4px;

    :focus{
        outline: none;
    }
`

function FilterTextInput({placeholder, context, value, onChangeHandler, className }){
    return(
        <div style={{"display" : "inline-block"}}>
            <FilterTextInputLabel >
                {context}
            </FilterTextInputLabel> 
            <FilterTextInputPartial className={className} onChange={onChangeHandler} value={value} placeholder={placeholder}></FilterTextInputPartial>
        </div>
        
        
    )
}



function FilterDropDown({className}){
    return (
        <FilterDropDownPartial defaultValue = "Location" className={className}>
            <option value="Location" disabled>Location</option>        
            <option value="placeholder">placeholder</option>
            <option value="placeholder">placeholder</option>
            <option value="placeholder">placeholder</option>
        </FilterDropDownPartial>
    )
}

export { FormInput, FilterTextInput, FilterDropDown };
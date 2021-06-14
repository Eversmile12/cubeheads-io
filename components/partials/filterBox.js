import { FilterTextInput, FilterDisabledInput , InputContainer } from "../UIElements/inputs"
import { FilterButton } from "../UIElements/buttons"
import {useQuery, gql } from "@apollo/client"
import styled from "styled-components"


const FiltersContainer = styled.div`
 
`
const FiltersRow = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 860px ){
        flex-direction: column;
    }

}
`

export default function FilterBox(props){
    return(
        <FiltersContainer>
            <FiltersRow className="mb-m">
                <FilterTextInput context="What:" placeholder="texture artist, rigger, environment" onChangeHandler={props.roleChangeHandler} value = {props.jobTitle}></FilterTextInput>
                <FilterTextInput  context="Where:" placeholder="Toronto, Oslo, Manchester" onChangeHandler={props.locationChangeHandler} value={props.jobLocation} ></FilterTextInput>
            </FiltersRow>
            <FiltersRow>
            <FilterDisabledInput  context="Studio:" placeholder="Coming soon"></FilterDisabledInput>
               <InputContainer> <FilterButton  onClick={() => {props.onSubmitHandler(0)}}>Filter</FilterButton></InputContainer>
            </FiltersRow>
        </FiltersContainer>
    )
}
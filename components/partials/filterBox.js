import { FilterTextInput, FilterDropDown, InputContainer } from "../UIElements/inputs"
import { FilterButton } from "../UIElements/buttons"
import {useQuery, gql } from "@apollo/client"
import styled from "styled-components"


const FiltersContainer = styled.div`
 
`
const FiltersRow = styled.div`
    display: flex;
    justify-content: center;

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
            <FilterTextInput context="Studio:" placeholder="Blizzard, Ubisoft, SquareEnix" onChangeHandler={props.roleChangeHandler} value = {props.jobTitle}></FilterTextInput>
               <InputContainer> <FilterButton  onClick={() => {props.onSubmitHandler(0)}}>Filter</FilterButton></InputContainer>
            </FiltersRow>
        </FiltersContainer>
    )
}
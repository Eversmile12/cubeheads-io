import { FilterTextInput, FilterDropDown } from "../UIElements/inputs"
import { FilterButton } from "../UIElements/buttons"
import {useQuery, gql } from "@apollo/client"
import styled from "styled-components"

const FiltersRow = styled.div`
    display: flex;
    justify-content: center;
`

export default function FilterBox(props){
    return(
        <div className="filter-box">
            <FiltersRow className="mb-m">
                <FilterTextInput className="mr-m" context="What:" placeholder="texture artist, rigger, environment" onChangeHandler={props.roleChangeHandler} value = {props.jobTitle}></FilterTextInput>
                <FilterTextInput  context="Where:" placeholder="Toronto, Oslo, Manchester" onChangeHandler={props.locationChangeHandler} value={props.jobLocation} ></FilterTextInput>
            </FiltersRow>
            <FiltersRow>
                <FilterDropDown className="mr-m"></FilterDropDown>
                <FilterButton  onClick={props.onSubmitHandler}>Filter</FilterButton>
            </FiltersRow>
        </div>
    )
}
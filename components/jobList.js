import FilterBox from "./partials/filterBox"  
import React, { useState } from "react"
import { useLazyQuery, useQuery, gql } from "@apollo/client"
import JobListItem from "./partials/jobListItem"
import styled from "styled-components"
const GET_JOBS_QUERY = gql` 
  query($role: String, $location : String) {
      jobs(roleContains: $role, locationContains: $location){
      id
      job_title
      job_location
      job_description
      studio_name{
        studio_name
        studio_logo
      }
    }
 
}`;


const JobListContainer = styled.div`
  width: 70rem;
  margin: 4rem auto;
`

  export default function JobList({jobs}){
    const [jobTitle, updateJobTitle] = React.useState("")
    const [jobLocation, updateJobLocation] = React.useState("")
    let [getJobs, {loading, data }] = useLazyQuery(GET_JOBS_QUERY)
    console.log(jobs)
    function roleChangeHandler(e){
      updateJobTitle(e.target.value)
      console.log(jobTitle)
    }

    function locationChangeHandler(e){

      updateJobLocation(e.target.value)
      console.log(jobLocation)
    }

      return (
        <div className="mt-xl">
          <FilterBox  roleChangeHandler={roleChangeHandler} onSubmitHandler = { () => getJobs({variables: {role: jobTitle, location: jobLocation}}) } jobTitle={jobTitle} locationChangeHandler={locationChangeHandler} jobLocation={jobLocation}></FilterBox>
          <JobListContainer >
            <ul>
              {data ? data.jobs.map(job => <JobListItem jobRole = {job.job_title} jobLocation = {job.job_location} studio = {job.studio_name.studio_name} studioLogo = {job.studio_name.studio_logo} jobDescription = {job.job_description}></JobListItem>) : 
              jobs.map(job => <JobListItem jobRole = {job.job_title} jobLocation = {job.job_location} studio = {job.studio_name.studio_name} studioLogo = {job.studio_name.studio_logo} jobDescription = {job.job_description}></JobListItem>)}
            </ul>
            
          </JobListContainer>
        </div>
          
      )
  }
import FilterBox from "./partials/filterBox"  
import React, { useEffect, useState } from "react"
import { useLazyQuery, useQuery, gql } from "@apollo/client"
import JobListItem from "./partials/jobListItem"
import styled from "styled-components"
import Pagination from "./partials/pagination"
import { GET_ALL_JOBS_AND_COUNT } from "../pages/api/graphql/queries/queries"


const JobListContainer = styled.div`
  width: 70rem;
  margin: 4rem auto;
`

  export default function JobList({jobs, retrievedJobCount}){
    const [jobTitle, updateJobTitle] = React.useState("")
    const [jobLocation, updateJobLocation] = React.useState("")
    const [totalJobs, setTotalJobs] = React.useState(retrievedJobCount)

    const [getJobs, {loading, data }] = useLazyQuery(GET_ALL_JOBS_AND_COUNT)
    const [queryOffset, setQueryOffset] = useState(0)
    const [jobProp, setJobsProp] = useState(jobs)


    useEffect(() => {
      if(data){
        console.log(data)
        setTotalJobs(data.jobs_count)
      }
    }, [data])

    function roleChangeHandler(e){
      updateJobTitle(e.target.value)
    }

    function locationChangeHandler(e){

      updateJobLocation(e.target.value)
    }

    function queryJobs(offset = 0){
      console.log("Job title: ", jobTitle )
      console.log("job location: ", jobLocation)
      getJobs({variables: {offset : (offset), role: jobTitle, location: jobLocation}})
      console.log(data)
      console.log("job location: ", jobLocation)
      if(jobProp){
        setJobsProp()
      }
    }

  

      return (
        <div>
          <FilterBox  roleChangeHandler={roleChangeHandler} onSubmitHandler = { queryJobs }jobTitle={jobTitle} locationChangeHandler={locationChangeHandler} jobLocation={jobLocation}></FilterBox>
          <JobListContainer >
            <p>Jobs found: {totalJobs}</p>
            <ul>
              {jobProp && jobs.map(job => <JobListItem keyValue={job.id} jobRole = {job.job_title} jobLocation = {job.job_location} studio = {job.studio_name.studio_name} studioLogo = {job.studio_name.studio_logo} jobDescription = {job.job_description}></JobListItem>)}
              {data && data.jobs.map(job => <JobListItem keyValue={job.id}  jobRole = {job.job_title} jobLocation = {job.job_location} studio = {job.studio_name.studio_name} studioLogo = {job.studio_name.studio_logo} jobDescription = {job.job_description}></JobListItem>)}
            </ul>
            <Pagination startingPage={1} lastPageValue = {7} firstPageValue ={1} totalItems={totalJobs} perPage={8} onClickHandler={queryJobs}></Pagination>
          </JobListContainer>
        </div>
          
      )
  }
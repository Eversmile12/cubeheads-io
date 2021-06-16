import FilterBox from "./partials/filterBox"  
import React, { useEffect, useState } from "react"
import { useLazyQuery } from "@apollo/client"
import JobListItem, { JobListContainer} from "./partials/jobListItem"
import Pagination from "./partials/pagination"
import { GET_ALL_JOBS_AND_COUNT } from "../pages/api/graphql/queries/queries"
import SubscribeForm from "./subscribeForm"



  export default function JobList({jobs, retrievedJobCount}){
    const [jobTitle, updateJobTitle] = React.useState("")
    const [jobLocation, updateJobLocation] = React.useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [jobProps, setJobsProps] = useState(jobs)
    const [onPageJobs, setOnPageJobs] = useState(jobProps.slice(0,7))
    const [totalJobs, setTotalJobs] = useState(jobProps.length)
    const [getJobs, {loading, data }] = useLazyQuery(GET_ALL_JOBS_AND_COUNT)



    useEffect(() => {
      console.log(currentPage)
      setOnPageJobs(jobProps.slice((currentPage-1)*7, ((currentPage-1)*7)+7))
    }, [currentPage])

    useEffect(() => {
      setOnPageJobs(jobProps.slice(0, (currentPage*7)))
      setTotalJobs(jobProps.length)
      setCurrentPage(1)
    }, [jobProps])


    useEffect(() => {
      if(data){
        console.log(currentPage)
        setJobsProps(data.jobs);
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
      console.log("job location: ", jobLocation)
    }

  

      return (
        <div>
          <FilterBox  roleChangeHandler={roleChangeHandler} onSubmitHandler={ queryJobs } jobTitle={jobTitle} 
          locationChangeHandler={locationChangeHandler} jobLocation={jobLocation}></FilterBox>
          <JobListContainer >
            <p>Jobs found: {totalJobs}</p>
            <ul>
              {
                onPageJobs && onPageJobs.map(job => <JobListItem keyValue={job.id} jobRole = {job.job_title}
                jobLocation = {job.job_location} studio = {job.studio_id.studio_name} studioLogo = {job.studio_id.studio_logo}
                jobDescription = {job.job_description} studioId = {job.studio_id.id}></JobListItem>)
              }
              {/* {data && data.jobs.map(job => <JobListItem keyValue={job.id}  jobRole = {job.job_title} jobLocation = {job.job_location} studio = {job.studio_id.studio_name} studioLogo = {job.studio_id.studio_logo} jobDescription = {job.job_description} studioId = {job.studio_id.id}></JobListItem>)} */}
            </ul>
            <Pagination  totalItems={totalJobs} perPage={8} onClickHandler={setCurrentPage}></Pagination>
          </JobListContainer>
        </div>
          
      )
  }
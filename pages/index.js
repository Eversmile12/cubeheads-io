import StaticHeader from "../components/staticHeader"
import JobList from "../components/jobList"
import StandardContentContainer from "../components/layouts/standardContentContainer"
import { useQuery, gql } from "@apollo/client"
const GET_JOBS_QUERY = ` 
  {
      jobs{
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


export async function getStaticProps(){
    const req = await fetch("http://localhost:3000/api/graphql", {
        method: 'POST',
        headers: {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify({
            "query" : GET_JOBS_QUERY
        }),
    })
    const json = await req.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
  return {
    props:{
      jobs: json.data.jobs
    },
  }
}

export default function Home({jobs}){
    return (
        <div>
        <StaticHeader></StaticHeader>
        <StandardContentContainer>
            <JobList jobs={jobs}></JobList>
        </StandardContentContainer>
          
        </div>
    )
}
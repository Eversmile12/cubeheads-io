import StaticHeader from "../components/staticHeader"
import JobList from "../components/jobList"
import StandardContentContainer from "../components/layouts/standardContentContainer"
import { GET_ALL_JOBS_AND_COUNT } from "../pages/api/graphql/queries/queries"
import client from "./api/graphql/apolloClient"

export async function getStaticProps(){
    const { data } = await client.query({
      query: GET_ALL_JOBS_AND_COUNT,
    })

    // const req = await fetch("http://localhost:3000/api/graphql", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type' : "application/json"
    //     },
    //     body: JSON.stringify({
    //         "query" : GET_ALL_JOBS_AND_COUNT
    //     }),
    // })
    // const json = await req.json()
    // if (json.errors) {
    //     console.error(json.errors)
    //     throw new Error('Failed to fetch API')
    // }
  return {
    props:{
      jobs: data.jobs,
      retrievedJobCount: data.jobs_count
    },
  }
}

export default function Home({jobs, retrievedJobCount}){
    return (
        <div>
        <StaticHeader></StaticHeader>
        <StandardContentContainer>
            <JobList jobs={jobs} retrievedJobCount={retrievedJobCount}></JobList>
        </StandardContentContainer>
          
        </div>
    )
}
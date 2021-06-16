import StaticHeader from "../components/staticHeader"
import JobList from "../components/jobList"
import StandardContentContainer from "../components/layouts/standardContentContainer"
import { GET_ALL_JOBS_AND_COUNT } from "../pages/api/graphql/queries/queries"
import client from "./api/graphql/apolloClient"
import Head from "next/head"
export async function getStaticProps(){
    const { data } = await client.query({
      query: GET_ALL_JOBS_AND_COUNT,
    })

  
  return {
    props:{
      jobs: data.jobs,
      retrievedJobCount: data.jobs_count
    }, revalidate: 10
  }
}

export default function Home({jobs, retrievedJobCount}){
  console.log(process.env.DOMAIN_URL)
  let randomJobs = jobs.slice().sort(() => Math.random() - 0.5)
    return (
        <div>
          <Head>
              <title>cubeheads.io | Top GameDev Jobs</title>
              <meta property="og:title" content="cubeheads.io | Top GameDev Jobs"></meta>
              <meta property="og:description" content="Discover more 500+ game development jobs offered by AAA and indie companies worldwide. Land your dream studio"></meta>
              <meta property="og:image" content="./logo-type-black"></meta>
              <meta property="og:url" content="https://cubeheads.io/"></meta>
              <meta property="og:type" content="website"></meta>
              <meta name="twitter:card" content="https://cubeheads.io/"></meta>
              <meta name="description" content="Discover more 500+ game development jobs offered by AAA and indie companies worldwide. Land your dream studio"></meta>
              <meta name="robots" content="index, follow"></meta>
              <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
              <meta name="twitter:site" content="@CubeheadsI"></meta>
              <meta name="twitter:creator" content="@CubeheadsI"></meta>
          </Head>
          <StaticHeader></StaticHeader>
          <StandardContentContainer>
              <JobList jobs={randomJobs} retrievedJobCount={retrievedJobCount}></JobList>
          </StandardContentContainer>
            
        </div>
    )
}
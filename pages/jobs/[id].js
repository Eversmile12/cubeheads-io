import JobPageContainer from "../../components/layouts/jobPageContainer"
import StudioHeader from "../../components/StudioHeader"
import Breadcrubms from "../../components/breadcrumbs"
import { CTAButton } from "../../components/UIElements/buttons"
import client from "../api/graphql/apolloClient"
import {GET_JOBS_BY_ID , GET_ALL_JOBS_IDS} from "../api/graphql/queries/queries"
import Head from "next/head"
import { useRouter } from "next/router"
import Custom404 from '../404'

export const getStaticPaths = async () => {
    const {data} = await client.query({
        query: GET_ALL_JOBS_IDS
    })

    const paths = data.jobs.map(job => {
        return {
            params: {id: job.id.toString()}
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async (context) =>{
    const idValue = context.params.id
    // console.log(id)
    
    const {loading, error, data} = await client.query({
        query: GET_JOBS_BY_ID ,
        variables: {
            id: parseInt(idValue)
        }
    })
    return{
        props:{ 
            id: idValue,
            data: data,
        }, revalidate: 10
    }

}


export default function jobDetails({id,data}){
    const router = useRouter()
 
    if(router.isFallback){
        return(
            <div>Loading...</div>
        )
    }
    if(!data.job){
        return (
            <div>
                <Custom404 />
            
            </div>
      )
    }
    const jobTitle = data.job.job_title
    const studioId = data.job.studio_id.id
    const studioName = data.job.studio_id.studio_name
    const studioLogo = data.job.studio_id.studio_logo
    const jobDescription = data.job.job_description.split("\n")
    const jobUrl = data.job.job_url
    const jobLocation = data.job.job_location

    
    return(
        <div>
            <Head key="meta">
                <title>{jobTitle + " - " + jobLocation}</title>
                <meta property="og:title" content={jobTitle + "-" +  jobLocation}></meta>
                <meta property="og:description" content={jobDescription.join(" ").substring(0,150)}></meta>
                <meta property="og:image" content={studioLogo}></meta>
                <meta property="og:url" content={"https://cubeheads.io/jobs" + id}></meta>
                <meta property="og:type" content="job"></meta>
                <meta name="description" content={jobDescription.toString().substring(0, 150)}></meta>
                <meta name="robots" content="index, follow" key="robots"></meta>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
                <meta name="twitter:site" content="@CubeheadsI"></meta>
                <meta name="twitter:creator" content="@CubeheadsI"></meta>
            </Head>
            <StudioHeader studioId = {studioId} studioName = {studioName} logo = {studioLogo} title ={jobTitle} location = {jobLocation} ></StudioHeader>
            <JobPageContainer>
                <Breadcrubms studio={studioName} job={jobTitle} studioId={studioId}></Breadcrubms>
                <h2 className="mb-m">Description:</h2>
                {jobDescription.map(line => {
                    return line.split(" ").length <= 5 ? <h3 className="mb-xs"><strong>{line}</strong></h3> : <p>{line}</p>
                    })}
                <div className="mt-l" style= {{"textAlign" : "right"}}>
                    <CTAButton href={jobUrl}>DISCOVER MORE</CTAButton>
                </div>
                
            </JobPageContainer>
        </div>
    )
}
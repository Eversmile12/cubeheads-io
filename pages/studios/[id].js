import client from "../api/graphql/apolloClient"
import { GET_STUDIO_BY_ID, GET_ALL_STUDIOS_IDS, GET_JOBS_BY_STUDIO} from "../api/graphql/queries/queries"
import StudioHeader from "../../components/StudioHeader"
import JobListItem, { JobListContainer} from "../../components/partials/jobListItem"
import StandardContentContainer from "../../components/layouts/standardContentContainer"
import Breadcrubms from "../../components/breadcrumbs"
import Head from "next/head"
export const getStaticPaths = async () => {
    const { data } = await client.query({query : GET_ALL_STUDIOS_IDS}) 

    const paths = data.studios.map(studio => 
        {
            return {params : {id : studio.id.toString()}}
        }
    )

    return {
        paths,
        fallback: true,
    }

}

export const getStaticProps = async(context) => {
    const studioId = context.params.id
    console.log(studioId)

    const { data }  = await client.query({
        query: GET_STUDIO_BY_ID,
        variables:{
            id: parseInt(studioId)
        }
    })
    // TODO: MIGHT BECOME ONE CALL
    const jobs = await client.query({
        query: GET_JOBS_BY_STUDIO,
        variables: {
            studioId : parseInt(studioId)
        }
    })

    console.log(data)

    return{
        props:{
            studioId: studioId,
            studioName: data.studio.studio_name,
            studioWebsite: data.studio.studio_website,
            studioLogo: data.studio.studio_logo,
            studioLocation: data.studio.studio_location,
            jobs: jobs.data.jobs
        }, revalidate: 10
    }
}


export default function studioDetails({studioId, studioName, studioWebsite, studioLogo, jobs, studioLocation}){
    console.log(jobs)
    return (
        <div>
            <Head>
                <title>{studioName + "Game dev jobs"}</title>
                <meta property="og:title" content={studioName - "Game dev jobs"}></meta>
                <meta property="og:description" content={studioName + " is hiring! Checkout our stunning game dev jobs, and worldwide game programmer offers. Land your dream studio!"}></meta>
                <meta property="og:image" content={studioLogo}></meta>
                <meta property="og:url" content={"https://cubeheads.io/studios" + studioId}></meta>
                <meta property="og:type" content="jobs"></meta>
                <meta name="description" content={studioName + " is hiring! Checkout our stunning game dev jobs, and worldwide game programmer offers. Land your dream studio!"}></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
                <meta name="twitter:site" content="@CubeheadsI"></meta>
                <meta name="twitter:creator" content="@CubeheadsI"></meta>
            </Head>
            <StudioHeader  title = {studioName} logo = {studioLogo} location ={studioLocation}  ></StudioHeader>
            <StandardContentContainer>
                <JobListContainer >
                <Breadcrubms studio={studioName} studioId={studioId}></Breadcrubms>
                <div>
                    <p>Jobs found: {jobs.length}</p>
                    <ul>
                        {jobs && jobs.map(job => <JobListItem keyValue={job.id}  jobRole = {job.job_title} jobLocation = {job.job_location} studio = {studioName} studioLogo = {studioLogo} jobLocation = {job.job_location}  jobDescription = {job.job_description}></JobListItem>)}
                    </ul>
                </div>
                   
                </JobListContainer>
            </StandardContentContainer>
            
        </div>
    )
}
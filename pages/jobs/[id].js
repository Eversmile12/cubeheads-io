import JobPageContainer from "../../components/layouts/jobPageContainer"
import StudioHeader from "../../components/StudioHeader"
import { CTAButton } from "../../components/UIElements/buttons"
import client from "../api/graphql/apolloClient"
import {GET_JOBS_BY_ID , GET_ALL_JOBS_IDS} from "../api/graphql/queries/queries"
import Head from "next/head"


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
        fallback: false
    }
}


export const getStaticProps = async (context) =>{
    const idValue = context.params.id
    // console.log(id)
    const {data} = await client.query({
        query: GET_JOBS_BY_ID ,
        variables: {
            id: parseInt(idValue)
        }
    })
    console.log(data)
    return{
        props:{ 
            id: idValue,
            jobTitle: data.job.job_title,
            studioId: data.job.studio_id.id,
            studioName: data.job.studio_id.studio_name,
            studioLogo: data.job.studio_id.studio_logo,
            jobDescription: data.job.job_description.split("\n"),
            jobUrl: data.job.job_url,
            jobLocation: data.job.job_location
        }, revalidate: 10
    }

}


export default function jobDetails({id,studioName, studioLogo, jobTitle, jobDescription, jobUrl, studioId, jobLocation}){
    return(
        
        <div>
            <Head>
                <title>{jobTitle + " - " + jobLocation}</title>
                <meta property="og:title" content={jobTitle + "-" +  jobLocation}></meta>
                <meta property="og:description" content={jobDescription.join(" ").substring(0,150)}></meta>
                <meta property="og:image" content={studioLogo}></meta>
                <meta property="og:url" content={"https://cubeheads.io/jobs" + id}></meta>
                <meta property="og:type" content="job"></meta>
                <meta name="description" content={jobDescription.toString().substring(0, 150)}></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
                <meta name="twitter:site" content="@CubeheadsI"></meta>
                <meta name="twitter:creator" content="@CubeheadsI"></meta>
            </Head>
            <StudioHeader studioId = {studioId} studioName = {studioName} logo = {studioLogo} title ={jobTitle} location = {jobLocation} ></StudioHeader>
            <JobPageContainer>
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
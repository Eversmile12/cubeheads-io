import JobPageContainer from "../../components/layouts/jobPageContainer"
import StudioHeader from "../../components/StudioHeader"
import { CTAButton } from "../../components/UIElements/buttons"
import client from "../api/graphql/apolloClient"
import {GET_JOBS_BY_ID , GET_ALL_JOBS_IDS} from "../api/graphql/queries/queries"



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
            jobTitle: data.job.job_title,
            studioName: data.job.studio_name.studio_name,
            studioLogo: data.job.studio_name.studio_logo,
            jobDescription: data.job.job_description.split("\n"),
            jobUrl: data.job.job_url
        }
    }

}


export default function jobDetails({studioName, studioLogo, jobTitle, jobDescription, jobUrl}){
    return(
        <div>
            <StudioHeader studioName = {studioName} studioLogo = {studioLogo} jobTitle={jobTitle} ></StudioHeader>
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
import client from "../api/graphql/apolloClient"
import { GET_STUDIO_BY_ID, GET_ALL_STUDIOS_IDS, GET_JOBS_BY_STUDIO} from "../api/graphql/queries/queries"
import StudioHeader from "../../components/StudioHeader"
import JobListItem, { JobListContainer} from "../../components/partials/jobListItem"

export const getStaticPaths = async () => {
    const { data } = await client.query({query : GET_ALL_STUDIOS_IDS}) 
    if(data){
        
    }
    const paths = data.studios.map(studio => 
        {
            return {params : {id : studio.id.toString()}}
        }
    )

    return {
        paths,
        fallback: false,
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
            studioName: data.studio.studio_name,
            studioWebsite: data.studio.studio_website,
            studioLogo: data.studio.studio_logo,
            studioLocation: data.studio.studio_location,
            jobs: jobs.data.jobs
        }
    }
}


export default function studioDetails({studioName, studioWebsite, studioLogo, jobs, studioLocation}){
    console.log(jobs)
    return (
        <div>
            <StudioHeader title = {studioName} logo = {studioLogo} location ={studioLocation}  ></StudioHeader>

            <JobListContainer >
            <p>Jobs found: {jobs.length}</p>
            <ul>
              {jobs && jobs.map(job => <JobListItem keyValue={job.id}  jobRole = {job.job_title} jobLocation = {job.job_location} studio = {studioName} studioLogo = {studioLogo} jobLocation = {job.job_location}  jobDescription = {job.job_description}></JobListItem>)}
            </ul>
          </JobListContainer>
        </div>
    )
}
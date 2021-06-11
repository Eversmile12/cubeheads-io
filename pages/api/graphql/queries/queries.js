import { gql } from "@apollo/client"

const GET_JOBS_BY_ID =gql` 
        
    query job($id: Int!){
        job(id: $id){
        job_title
        job_description
        job_url
        studio_name{
            studio_name
            studio_logo
        }
    }
}

`



const GET_ALL_JOBS_AND_COUNT =  gql` 
query($offset : Int, $role: String, $location : String) {
    jobs(offset:$offset, count:8, roleContains: $role, locationContains: $location){
    id
    job_title
    job_location
    job_description
    studio_name{
      studio_name
      studio_logo
    }
  },
  jobs_count(roleContains: $role, locationContains: $location)

}`;

const GET_ALL_JOBS_IDS = gql` 
{
    jobs{
      id
    }
}`;


const GET_ALL_STUDIOS_NAMES = gql` 
{
    studios{
      studio_name
    }
}`;




const GET_STUDIO_BY_NAME = gql` 
query($studioName : String) {
    studio(studioName: $studioName){
      studio_name
      studio_website
      studio_location
    }
}`;

export { GET_JOBS_BY_ID, GET_ALL_JOBS_IDS, GET_ALL_JOBS_AND_COUNT, GET_ALL_STUDIOS_NAMES, GET_STUDIO_BY_NAME }

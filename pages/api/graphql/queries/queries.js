import { gql } from "@apollo/client"

const GET_JOBS_BY_ID =gql` 
        
    query job($id: Int!){
        job(id: $id){
        job_title
        job_description
        job_url
        job_location
        studio_id{
            id
            studio_name
            studio_logo
        }
    }
}

`

const GET_ALL_JOBS_AND_COUNT =  gql` 
query($offset : Int, $role: String, $location : String) {
    jobs(offset:$offset, roleContains: $role, locationContains: $location){
    id
    job_title
    job_location
    job_description
    studio_id{
      id
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

const GET_JOBS_BY_STUDIO =gql` 
        
    query jobs($studioId: Int!){
        jobs(studioId: $studioId){
        id
        job_title
        job_description
        job_url
        job_location
    }
}

`

const GET_ALL_STUDIOS_IDS = gql` 
{
    studios{
      id
    }
}`;




const GET_STUDIO_BY_ID = gql` 
query($id : Int) {
    studio(id: $id){
      studio_name
      studio_website
      studio_location
      studio_logo
      studio_location
    }
}`;

export { GET_JOBS_BY_ID, GET_ALL_JOBS_IDS, GET_ALL_JOBS_AND_COUNT, GET_JOBS_BY_STUDIO,
          GET_ALL_STUDIOS_IDS, GET_STUDIO_BY_ID,  }

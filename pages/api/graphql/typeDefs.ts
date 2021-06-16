import { gql } from "apollo-server-micro"

export const typeDefs = gql`
    type Query {
        jobs (count: Int, offset: Int, unique: Boolean = false, roleContains: String, locationContains: String, id: Int, studioId: Int, studioName: String): [Job!]!
        job(id: Int) : Job!
        studio(id: Int) : Studio!
        studios(count: Int , offset: Int = 0, unique: Boolean = false): [Studio!]!
        jobs_count( roleContains: String, locationContains: String) : Int!
    }

    type Job {
        id: ID!
        studio_id: Studio
        job_title: String!
        job_description: String!
        job_url: String!
        job_location: String
        job_timestamp: String!
    }

    type Studio {
        id: ID!
        studio_name: String!
        studio_website: String
        studio_location: String!
        studio_logo: String
    }
`
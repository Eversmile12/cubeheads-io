import { gql } from "apollo-server-micro"

export const typeDefs = gql`
    type Query {
        jobs (count: Int = 25, offset: Int = 0, unique: Boolean = false, roleContains: String, locationContains: String): [Job!]!
        studios(count: Int = 25, offset: Int = 0, unique: Boolean = false): [Studio!]!
    }

    type Job {
        id: ID!
        studio_name: Studio
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
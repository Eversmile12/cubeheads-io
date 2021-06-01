import{ gql } from "apollo-server-micro"

export const resolvers = {
    Query: {
        jobs: async (_, args, context) =>{
            return context.prisma.job.findMany({
                take: args.count,
                skip: args.offset
            })
        },

        studios: async (_, args, context) => {
            return context.prisma.studio.findMany({
                take: args.count,
                skip: args.offset
            })
        },
    },

    Studio: {
        id: (parent) => parent.id,
        studio_name: (parent) => parent.studioName,
        studio_website: (parent) => parent.studioWebsite,
        studio_location: (parent) => parent.studioLocation,
    },

    Job: {
        id: (job) => job.id,
        studio_name: async (job, args, context) => {
           return await context.studioLoader.load(job.studioName)
        },
        job_title: (job) => job.jobTitle,
        job_url: (job) => job.jobUrl,
        job_location: (job) => job.jobLocation,
        job_timestamp: (job) => job.jobTimestamp
    }

}




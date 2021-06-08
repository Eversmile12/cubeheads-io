import{ gql } from "apollo-server-micro"

export const resolvers = {
    Query: {
        jobs: async (_, args, context) =>{
            if(args.unique_location){
                console.log("printing unique")
                return context.prisma.job.findMany({
                    take: args.count,
                    skip: args.offset,
                    distinct: ['jobLocation']
                })
            }if(args.locationContains || args.roleContains){
                if(!args.roleContains){
                    return context.prisma.job.findMany({
                        where: {
                            jobLocation: {
                                contains: args.locationContains
                            }
                        }
                    })
                }else if(!args.locationContains){
                    return context.prisma.job.findMany({
                        where: {
                            jobTitle: {
                                contains: args.roleContains
                            }
                        }
                    })
                }
                return context.prisma.job.findMany({
                    where: {
                        AND:{
                            jobTitle: {
                                contains: args.roleContains
                            },
                            jobLocation: {
                                contains: args.locationContains
                            }
                        }
                    }
                })
            }
            return context.prisma.job.findMany({
                take: args.count,
                skip: args.offset
            })
        },

        studios: async (_, args, context) => {
            if(args.unique_location){
                return context.prisma.job.findMany({
                    take: args.count,
                    skip: args.offset,
                    distinct: ['studioName']
                })
            }
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
        studio_logo: (parent) => parent.studioLogo
    },

    Job: {
        id: (job) => job.id,
        studio_name: async (job, args, context) => {
           return await context.studioLoader.load(job.studioName)
        },
        job_title: (job) => job.jobTitle,
        job_description: (job) => job.jobDescription,
        job_url: (job) => job.jobUrl,
        job_location: (job) => job.jobLocation,
        job_timestamp: (job) => new Date(job.lastSeen).toLocaleDateString("en-GB")
    }

}




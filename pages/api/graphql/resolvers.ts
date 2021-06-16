

export const resolvers = {
    Query: {
        jobs: async (_, args, context) =>{
            
            return context.prisma.job.findMany({
                where:{
                    AND:{
                        jobTitle: {
                            contains: args.roleContains,
                        },
                        jobLocation: {
                            contains: args.locationContains
                        },
                        studioId: args.studioId,
                        studio:{
                            studioName: {
                                contains: args.studioName
                                
                            }
                        }
                    }
                },
              
                    
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

        jobs_count: async (_, args, context) => {
            return context.prisma.job.count({
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
        },
        
        job: async (_,args, context) => {
            return context.prisma.job.findUnique({
                where: {
                    id: args.id
                }
            })
        },

        studio: async (_, args, context) => {
            return context.prisma.studio.findUnique({
                where: {
                    id: args.id
                }
            })
        }
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
        studio_id: async (job, args, context) => {
           return await context.studioLoader.load(job.studioId)
        },
        job_title: (job) => job.jobTitle,
        job_description: (job) => job.jobDescription,
        job_url: (job) => job.jobUrl,
        job_location: (job) => job.jobLocation,
        job_timestamp: (job) => new Date(job.lastSeen).toLocaleDateString("en-GB")
    }

}




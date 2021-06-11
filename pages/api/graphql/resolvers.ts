

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
                        }
                    }
                },
                take: args.count,
                skip: args.offset
            })
            
        },

        studios: async (_, args, context) => {
            return context.prisma.studio.findMany({
                where: {
                    studioName: args.studioName,
                },
                take: args.count,
                skip: args.offset
            })
        },

        jobs_count: async (_, args, context) => {return context.prisma.job.count()},
        
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
                    studioName: args.studioName
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




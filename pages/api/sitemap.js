import { SitemapStream, streamToPromise } from "sitemap"
import client from "./graphql/apolloClient"
import { GET_ALL_STUDIOS_IDS, GET_ALL_JOBS_IDS } from "./graphql/queries/queries"




export default async (req, res) => {
    
    const today = new Date()
    const smStream = new SitemapStream({
        hostname: "https://cubeheads.io"
    })

    smStream.write({
        url:"/",
        priority: 1.0,
    })

    const {data} = await client.query({query: GET_ALL_JOBS_IDS})
    data.jobs.forEach(job => {
        smStream.write({
            url:`jobs/${job.id}`,
            lastmod: today.toISOString(),
            priority: 0.8
        })
    });

    const studios = await client.query({query: GET_ALL_STUDIOS_IDS})
    
    studios.data.studios.forEach(studio => {
        smStream.write({
            url:`studios/${studio.id}`,
            lastmod: today.toISOString(),
            priority: 0.8
        })
    });

    smStream.end()
    const sitemap = await streamToPromise(smStream).then(sm => sm.toString())
    res.setHeader("Content-type", "text/xml")
    res.write(sitemap)
    res.end()
}
import client from "../api/graphql/apolloClient"
import { GET_STUDIO_BY_NAME, GET_ALL_STUDIOS_NAMES} from "../api/graphql/queries/queries"

export const getStaticPaths = async () => {
    const { data } = await client.query({query : GET_ALL_STUDIOS_NAMES}) 

    const paths = data.studios.map(studio => 
        {
            return {params : {studioname : studio.studio_name}}
        }
    )

    return {
        paths,
        fallback: false,
    }

}



export const getStaticProps = async(context) => {
    const studioName = context.params.studioname
    console.log(studioName)
    const { data }  = await client.query({
        query: GET_STUDIO_BY_NAME,
        variables:{
            studioName: studioName
        }
    })

    console.log(data)

    return{
        props:{
            studioName: data.studio.studio_name,
            studioWebsite: data.studio.studio_website
        }
    }
}


export default function studioDetails({studioName, studioWebsite}){
    return (
        <div>
            {studioName}
            {studioWebsite}
        </div>
    )
}
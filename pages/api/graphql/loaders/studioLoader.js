import  DataLoader from "dataloader"
import prisma from "../../../../prisma/setup"


const batchStudios = async (ids) => {
    const studios = await prisma.studio.findMany({
        where: {
            id : { in: ids }
        }
    })
    .then(studios => ids.map(id => studios.find(studio => studio.id == id)))
    
    return studios
}

export const studioLoader = () => new DataLoader(batchStudios)
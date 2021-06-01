import * as DataLoader from "dataloader"
import prisma from "../../../../prisma/setup"


const batchStudios = async (names) => {
    const studios = await prisma.studio.findMany({
        where: {
            studioName : { in: names }
        }
    })
    .then(studios => names.map(name => studios.find(studio => studio.studioName == name)))
    
    return studios
}

export const studioLoader = () => new DataLoader(batchStudios)
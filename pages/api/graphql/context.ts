import { PrismaClient } from ".prisma/client"
import prisma from "../../../prisma/setup"
import { studioLoader } from "./loaders/studioLoader"


export interface Context{
    prisma: PrismaClient;
    studioLoader: ReturnType<typeof studioLoader>;
}


export function context(): Context{
    return {prisma, studioLoader: studioLoader()}
}
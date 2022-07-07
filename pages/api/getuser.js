import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function main(req, res){
    const usersList = await prisma.user.findMany()


    res.status(200).json(usersList);
}
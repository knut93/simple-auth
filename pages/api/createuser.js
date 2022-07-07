import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function main(req, res){
    const data = req.body;
    const newUser = await prisma.user.create({
        data: {
            lastName: data.lastName,
            email: data.email,
        },
    })

    res.status(200).json(newUser);
}
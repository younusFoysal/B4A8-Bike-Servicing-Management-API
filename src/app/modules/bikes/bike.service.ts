import { Bike, PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

const createBikeService = async (payload: Bike) => {
    const result = await prisma.bike.create({
        data: payload,
    });
    return result;
};

const getAllBikesService = async () => {
    const result = await prisma.bike.findMany();
    return result;
};

const getSingleBikeService = async (id: string) => {
    const result = await prisma.bike.findUnique({
        where: {
            bikeId: id,
        },
    });
    return result;
};

export const BikeService = {
    createBikeService,
    getAllBikesService,
    getSingleBikeService,
};
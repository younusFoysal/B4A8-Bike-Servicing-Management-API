import { Bike, PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

const createBikeService = async (payload: Bike) => {
    const result = await prisma.bike.create({
        data: payload,
    });

    if (!result) {
        throw new Error("Failed to create bike");
    }

    return result;
};

const getAllBikesService = async () => {
    const result = await prisma.bike.findMany();

    if (!result) {
        throw new Error("Failed to fetch bikes");
    }

    return result;
};

const getSingleBikeService = async (id: string) => {
    const result = await prisma.bike.findUnique({
        where: {
            bikeId: id,
        },
    });

    if (!result) {
        throw new Error("Bike not found");
    }

    return result;
};

export const BikeService = {
    createBikeService,
    getAllBikesService,
    getSingleBikeService,
};
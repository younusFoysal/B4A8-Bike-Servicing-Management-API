import { Service, PrismaClient } from "../../../../generated/prisma";


const prisma = new PrismaClient();

const createServiceService = async (payload: Service) => {
    const result = await prisma.service.create({
        data: payload,
    });

    if (!result) {
        throw new Error("Failed to create service");
    }

    return result;
};

const getAllServicesService = async () => {
    const result = await prisma.service.findMany();

    if (!result) {
        throw new Error("Failed to fetch services");
    }

    return result;
};

const getSingleServiceService = async (id: string) => {
    const result = await prisma.service.findUnique({
        where: {
            serviceId: id,
        },
    });

    if (!result) {
        throw new Error("Service not found");
    }

    return result;
};

const updateServiceService = async (id: string, payload: Partial<Service>) => {
    const completionDate = payload ? payload.completionDate ? payload.completionDate : new Date() : new Date();

    const result = await prisma.service.update({
        where: {
            serviceId: id,
        },
        data: {
            completionDate: completionDate,
            status: "done",
            // ...payload,
        }
    });

    if (!result) {
        throw new Error("Failed to update service");
    }

    return result;
};


export const ServiceService = {
    createServiceService,
    getAllServicesService,
    getSingleServiceService,
    updateServiceService,
};
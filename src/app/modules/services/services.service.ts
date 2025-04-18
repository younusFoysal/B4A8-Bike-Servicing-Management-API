import { Service, PrismaClient } from "../../../../generated/prisma";


const prisma = new PrismaClient();

const createServiceService = async (payload: Service) => {
    const result = await prisma.service.create({
        data: payload,
    });
    return result;
};

const getAllServicesService = async () => {
    const result = await prisma.service.findMany();
    return result;
};

const getSingleServiceService = async (id: string) => {
    const result = await prisma.service.findUnique({
        where: {
            serviceId: id,
        },
    });
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
    return result;
};


export const ServiceService = {
    createServiceService,
    getAllServicesService,
    getSingleServiceService,
    updateServiceService,
};
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


const getPendingOrOverdueServicesService = async () => {

    console.log("Fetching pending or overdue services...");

    const currentDate = new Date();
    // Calculate date 7 days ago
    const sevenDaysAgo = new Date(currentDate);
    sevenDaysAgo.setDate(currentDate.getDate() - 7);

    const pendingOrOverdueServices = await prisma.service.findMany({
        where: {
            AND: [
                {
                    OR: [
                        { status: "pending" },
                        { status: "inProgress" }
                    ]
                },
                {
                    serviceDate: {
                        lt: sevenDaysAgo
                    }
                }
            ]
        },
    });

    if (!pendingOrOverdueServices) {
        throw new Error("Failed to fetch pending or overdue services");
    }

    return pendingOrOverdueServices;
};



export const ServiceService = {
    createServiceService,
    getAllServicesService,
    getSingleServiceService,
    updateServiceService,
    getPendingOrOverdueServicesService
};
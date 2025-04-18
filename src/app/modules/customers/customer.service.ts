import { Customer, PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

const createCustomerService = async (payload: Customer) => {
    const result = await prisma.customer.create({
        data: payload,
    });
    return result;
};


const getAllCustomersService = async () => {
    const result = await prisma.customer.findMany();
    return result;
};

const getSingleCustomerService = async (id: string) => {
    const result = await prisma.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    return result;
};

const updateCustomerService = async (id: string, payload: Partial<Customer>) => {
    const result = await prisma.customer.update({
        where: {
            customerId: id,
        },
        data: payload,
    });
    return result;
};

const deleteCustomerService = async (id: string) => {
    const result = await prisma.customer.delete({
        where: {
            customerId: id,
        },
    });
    return result;
};




export const CustomerService = {
    createCustomerService,
    getAllCustomersService,
    getSingleCustomerService,
    updateCustomerService,
    deleteCustomerService,
};
import { Customer, PrismaClient } from "../../../../generated/prisma";
import ApiError from "../../Errors/ApiError";

const prisma = new PrismaClient();

const createCustomerService = async (payload: Customer) => {
    const result = await prisma.customer.create({
        data: payload,
    });

    if (!result) {
        throw new ApiError(400, "Failed to create customer");
    }

    return result;
};


const getAllCustomersService = async () => {
    const result = await prisma.customer.findMany();

    if (result.length === 0) {
        throw new ApiError(400, "No customers found");
    }

    if (!result) {
        throw new ApiError(400, "Failed to fetch customers");
    }

    return result;
};

const getSingleCustomerService = async (id: string) => {
    const result = await prisma.customer.findUnique({
        where: {
            customerId: id,
        },
    });

    if (!result) {
        throw new ApiError(404, "Customer not found");
    }

    return result;
};

const updateCustomerService = async (id: string, payload: Partial<Customer>) => {
    const result = await prisma.customer.update({
        where: {
            customerId: id,
        },
        data: payload,
    });

    if (!result) {
        throw new ApiError(404, "Customer not found");
    }

    return result;
};

const deleteCustomerService = async (id: string) => {
    const result = await prisma.customer.delete({
        where: {
            customerId: id,
        },
    });

    if (!result) {
        throw new ApiError(404, "Customer not found");
    }

    return result;
};




export const CustomerService = {
    createCustomerService,
    getAllCustomersService,
    getSingleCustomerService,
    updateCustomerService,
    deleteCustomerService,
};
import CatchAsync from "../../../shared/CatchAsync";
import SendResponse from "../../../shared/SendResponse";
import httpStatus from "http-status";
import {CustomerService} from "./customer.service";
import sendResponse from "../../../shared/SendResponse";


const createCustomer = CatchAsync(async (req, res) => {
    const result = await CustomerService.createCustomerService(req.body);

    SendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer created successfully",
        data: result,
    });
})

const getAllCustomers = CatchAsync(async (req, res) => {
    const result = await CustomerService.getAllCustomersService();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result,
    });
})

const getSingleCustomer = CatchAsync(async (req, res) => {
    const result = await CustomerService.getSingleCustomerService(req.params.id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer fetched successfully",
        data: result,
    });
});

const updateCustomer = CatchAsync(async (req, res) => {
    const result = await CustomerService.updateCustomerService(req.params.id, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer updated successfully",
        data: result,
    });
});

const deleteCustomer = CatchAsync(async (req, res) => {
    const result = await CustomerService.deleteCustomerService(req.params.id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer deleted successfully",
    });
});




export const CustomerController = {
    createCustomer,
    getAllCustomers,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer,
};
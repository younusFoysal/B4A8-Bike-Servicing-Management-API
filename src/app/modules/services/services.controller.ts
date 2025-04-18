import httpStatus from "http-status";
import CatchAsync from "../../../shared/CatchAsync";
import SendResponse from "../../../shared/SendResponse";
import {ServiceService} from "./services.service";


const createService = CatchAsync(async (req, res) => {
    const {...serviceData} = req.body;

    const result = await ServiceService.createServiceService(serviceData);
    SendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service record created successfully",
        data: result,
    });
})

const getAllServices = CatchAsync(async (req, res) => {
    const result = await ServiceService.getAllServicesService();
    SendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service records fetched successfully",
        data: result,
    });
})

const getSingleService = CatchAsync(async (req, res) => {
    const result = await ServiceService.getSingleServiceService(req.params.id);
    SendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service record fetched successfully",
        data: result,
    });
})

const updateService = CatchAsync(async (req, res) => {
    const result = await ServiceService.updateServiceService(req.params.id, req.body);
    SendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service marked as completed",
        data: result,
    });
})

const getPendingOrOverdueServices = CatchAsync(async (req, res) => {
    console.log("called")

    const result = await ServiceService.getPendingOrOverdueServicesService();
    console.log(result)

    SendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Pending or overdue services fetched successfully",
        data: result,
    });
});





export const ServiceController = {
    createService,
    getAllServices,
    getSingleService,
    updateService,
    getPendingOrOverdueServices,
};
import httpStatus from "http-status";
import CatchAsync from "../../../shared/CatchAsync";
import SendResponse from "../../../shared/SendResponse";
import {BikeService} from "./bike.service";


const createBike = CatchAsync(async (req, res) => {
    const result = await BikeService.createBikeService(req.body);
    SendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bike added successfully",
        data: result,
    });
});

const getAllBikes = CatchAsync(async (req, res) => {
    const result = await BikeService.getAllBikesService();
    SendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bikes fetched successfully",
        data: result,
    });
});

const getSingleBike = CatchAsync(async (req, res) => {
    const result = await BikeService.getSingleBikeService(req.params.id);
    SendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bike fetched successfully",
        data: result,
    });
});



export const BikeController = {
    createBike,
    getAllBikes,
    getSingleBike,
};
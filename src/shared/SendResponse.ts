import { Response } from "express";

const SendResponse = <T>(res: Response, jsondata: {
    statusCode: number,
    success: boolean,
    message: string,
    meta?: {
        page: number,
        limit: number,
        total: number
    },
    data?: T | null | undefined
}) => {
    res.status(jsondata.statusCode).json({
        success: jsondata.success,
        status: jsondata.statusCode,
        message: jsondata.message,
        meta: jsondata.meta || undefined,
        data: jsondata.data || undefined
    })
}

export default SendResponse;

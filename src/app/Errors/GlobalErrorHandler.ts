import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const GlobalErrorHandler: ErrorRequestHandler = (
    error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || 'Something went wrong';

    // Determine environment
    const isDevelopment = process.env.NODE_ENV !== 'production';

    const errorResponse = {
        success: false,
        status: statusCode,
        message,
        stack: isDevelopment ? error.stack : undefined
    };

    res.status(statusCode).json(errorResponse);
};

export default GlobalErrorHandler;

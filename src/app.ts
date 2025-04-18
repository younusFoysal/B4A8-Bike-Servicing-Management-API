import express, { Request, Response } from "express";
import httpStatus from "http-status";
import router from "./app/routes";
import GlobalErrorHandler from "./app/Errors/GlobalErrorHandler";
import ApiError from "./app/Errors/ApiError";


const app = express();

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Bike Servicing Management API Server is Running...",
    });
});

app.use("/api", router);



// 404 handler
app.use((req: Request, res: Response, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, `API Not Found: ${req.originalUrl}`));
});

// Global error handler
app.use(GlobalErrorHandler);


export default app;

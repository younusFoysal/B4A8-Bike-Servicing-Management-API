import express from "express";


const router = express.Router();

router.post("/", ServiceController.createService);


export const ServiceRoutes = router;


import express from "express";
import {ServiceController} from "./services.controller";


const router = express.Router();

router.post("/", ServiceController.createService);
router.get("/", ServiceController.getAllServices);
router.get("/:id", ServiceController.getSingleService);
router.put("/:id", ServiceController.updateService);
router.get("/status", ServiceController.getPendingOrOverdueServices);


export const ServiceRoutes = router;


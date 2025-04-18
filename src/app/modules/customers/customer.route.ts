import express from "express";
import { CustomerController } from "./customer.controller";

const router = express.Router();

router.post("/create-customer", CustomerController.createCustomer);



export const CustomerRoutes = router;
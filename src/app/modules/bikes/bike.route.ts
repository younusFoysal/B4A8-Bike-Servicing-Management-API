import express from "express";


const router = express.Router();


router.post("/", BikeController.createBike);

export const BikeRoutes = router;
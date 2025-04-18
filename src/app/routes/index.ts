import express from "express";
import {CustomerRoutes} from "../modules/customers/customer.route";
import {BikeRoutes} from "../modules/bikes/bike.route";
import {ServiceRoutes} from "../modules/services/services.route";


const router = express.Router();

const moduleRoutes = [
    {
        path: "/customers",
        route: CustomerRoutes,
    },
    {
        path: "/bikes",
        route: BikeRoutes,
    },
    {
        path: 'services',
        route: ServiceRoutes,
    }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
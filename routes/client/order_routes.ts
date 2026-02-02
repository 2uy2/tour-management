import express from "express";
const router = express.Router();

import * as controller from "../../controller/client/order_controller";

router.post("/", controller.index);

export const orderRoute = router;
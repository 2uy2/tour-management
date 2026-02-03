import express from "express";
const router = express.Router();

import * as controller from "../../controller/client/order_controller";

router.post("/", controller.index);
router.get("/success", controller.success);
export const orderRoute = router;
import { Router } from "express";
const router: Router = Router();

import * as controller from "../../controller/admin/tour_controller";

router.get("/", controller.index);
router.get("/create", controller.create);
router.post("/create", controller.createPost);

export const tourRoutes: Router = router;
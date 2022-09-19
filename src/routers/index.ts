import { Router } from "express";

import userRouter from "./userRouter";
import testRouter from "./testRouter";
import disciplineRouter from "./disciplineRouter";
import categoryRouter from "./categoryRouter";
//import teacherRouter from "./teacherRouter";

const router = Router();

router.use(userRouter);
router.use(testRouter);
router.use(disciplineRouter);
router.use(categoryRouter);
//router.use(teacherRouter);

export default router;

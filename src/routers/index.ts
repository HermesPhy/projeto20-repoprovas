import { Router } from "express";

import userRouter from "./userRouter";
import testRouter from "./testRouter";
//import categoryRouter from "./categoryRouter";
//import disciplineRouter from "./disciplineRouter";
//import teacherRouter from "./teacherRouter";

const router = Router();

router.use(userRouter);
router.use(testRouter);
//router.use(categoryRouter);
//router.use(disciplineRouter);
//router.use(teacherRouter);

export default router;

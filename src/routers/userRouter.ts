import { Router } from "express";

import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { userSchema } from "../schemas/userSchema";
import userController from "../controllers/userController";

const userRouter = Router();

userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(userSchema),
  userController.signUp
);
userRouter.post(
  "/sign-in",
  validateSchemaMiddleware(userSchema),
  userController.signIn
);

export default userRouter;

import { Router } from "express";
import userController from "../controller/user.controller.js";

const router = Router();

router.post("/", userController.singup);
router.delete("/:id", userController.delete);
router.post("/login", userController.login);

export default router;

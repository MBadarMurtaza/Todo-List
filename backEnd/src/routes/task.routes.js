import { Router } from "express";
import * as taskController from "../controller/task.controller.js"; // Use named imports here
import { authenticate } from "../middlewares/auth.js";

const router = Router();

router.post("/", authenticate, taskController.createTask); // Ensure the function is correctly imported
router.get("/", authenticate, taskController.getAllTasks); // Ensure the function is correctly imported
router.put("/:id", authenticate, taskController.updateTask); // Ensure the function is correctly imported
router.delete("/:id", authenticate, taskController.deleteTask); // Ensure the function is correctly imported

export default router;

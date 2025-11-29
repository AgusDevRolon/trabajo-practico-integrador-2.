import { Router } from "express";
import {
  createUser,
  deletedUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";
import {
  idUserValidations,
  userUpdateValidations,
} from "../middlewares/validations/user.validations.js";
import { applyValidation } from "../middlewares/validator.js";
import { matchedDataMiddleware } from "../middlewares/matched_data.middleware.js";

export const routerUser = Router();

routerUser.post("/users", createUser);
routerUser.get("/users", getAllUsers);
routerUser.get("/users/:id", getUserById);
routerUser.put("/users/:id", updateUser);
routerUser.delete("/users/:id", deletedUser);
routerUser.get("/users", authMiddleware, adminMiddleware, getAllUsers);

routerUser.get(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  idUserValidations,
  applyValidation,
  matchedDataMiddleware,
  getUserById
);

routerUser.put(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  idUserValidations,
  userUpdateValidations,
  applyValidation,
  matchedDataMiddleware,
  updateUser
);

routerUser.delete(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  idUserValidations,
  applyValidation,
  matchedDataMiddleware,
  deletedUser
);
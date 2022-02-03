import express from "express";

// validators
import runValidation from "../validators/index.js";
import { categoryCreatValidator } from "../validators/category.validator";
import { requireSignin, adminMiddleware} from "../controllers/auth.controller.js";
import {create} from "../controllers/category.controller.js"

const router = express.Router();

router.post(
    '/category',
    categoryCreatValidator,
    runValidation,
    requireSignin,
    adminMiddleware,
    create
)

export default router;

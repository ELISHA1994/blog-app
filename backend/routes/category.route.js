import express from "express";

// validators
import runValidation from "../validators/index.js";
import { categoryCreatValidator } from "../validators/category.validator";
import { requireSignin, adminMiddleware} from "../controllers/auth.controller.js";
import {create_category, get_category, get_categories, delete_category} from "../controllers/category.controller.js"

const router = express.Router();

router.post(
    '/category',
    categoryCreatValidator,
    runValidation,
    requireSignin,
    adminMiddleware,
    create_category
)

router.get('/categories', get_categories)
router.get('/category/:slug', get_category)
router.delete(
    '/category/:slug',
    requireSignin,
    adminMiddleware,
    delete_category
)

export default router;

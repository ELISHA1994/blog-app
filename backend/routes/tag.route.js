import express from "express";

// controllers
import {
    createTag,
    getTags,
    getTag,
    removeTag
} from "../controllers/tag.controller.js"

// validators
import runValidation from "../validators/index.js";
import { tagCreateValidator } from "../validators/tag.validator.js"
import {adminMiddleware, requireSignin} from "../controllers/auth.controller.js";

const router = express.Router();

router.post(
    "/tag",
    tagCreateValidator,
    runValidation,
    requireSignin,
    adminMiddleware,
    createTag
)
router.get("/tags", getTags);
router.get("/tag/:slug", getTag);
router.delete("/tag/:slug", requireSignin, adminMiddleware, removeTag);

export default router;

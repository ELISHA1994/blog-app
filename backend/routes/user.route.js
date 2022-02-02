import express from "express";
import {
    requireSignin,
    adminMiddleware,
    authMiddleware
} from "../controllers/auth.controller.js";
import {read} from "../controllers/user.controller.js";

const router = express.Router();

router.get('/profile', requireSignin, adminMiddleware, read);

export default router;

import express from "express";
import {signup} from "../controllers/auth.controller.js"

// Validators
import runValidation from "../validators/index.js";
import { userSignupValidator } from "../validators/auth.validator.js";

const router = express.Router();

router.post('/signup', userSignupValidator, runValidation, signup);

export default router;
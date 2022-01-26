import express from "express";
import {signup, signin} from "../controllers/auth.controller.js"

// Validators
import runValidation from "../validators/index.js";
import {userSigninValidator, userSignupValidator} from "../validators/auth.validator.js";

const router = express.Router();

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSigninValidator, runValidation, signin);

export default router;
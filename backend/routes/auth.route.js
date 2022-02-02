import express from "express";
import {
    signup,
    signin,
    requireSignin, signout
} from "../controllers/auth.controller.js"

// Validators
import runValidation from "../validators/index.js";
import {userSigninValidator, userSignupValidator} from "../validators/auth.validator.js";

const router = express.Router();

// if validation is passed, execute the code in signup and signin controllers
router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSigninValidator, runValidation, signin);
router.get('/signout', signout)

// // test
// router.get('/secret', requireSignin, (req, res) => {
//     res.json({
//         message: 'you have access to secret page'
//     });
// })

export default router;

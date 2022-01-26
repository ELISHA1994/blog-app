import expressjwt from "express-jwt";
import {sign_up, sign_in} from "../services/auth.service.js";

export const signup = async (req, res) => {
    try {
        await sign_up(req.body);

        return res.json({
            message: 'Signup successful! Please signin.'
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            error: error.message
        });
    }

};

export const signin = async (req, res) => {
    try {
        const resultFromService = await sign_in(req.body);

        res.cookie('token', resultFromService.token, { expiresIn: '1d' });
        return res.json(resultFromService);
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            error: error.message
        });
    }
}
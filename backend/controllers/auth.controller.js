import {sign_up} from "../services/auth.service.js";

export const signup = async (req, res) => {
    try {
        await sign_up(req.body);

        res.json({
            message: 'Signup successful! Please signin.'
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            error: error
        });
    }

};
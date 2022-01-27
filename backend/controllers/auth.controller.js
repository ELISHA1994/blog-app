import expressJwt from "express-jwt";
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

export const signout = async (req, res) => {
    res.clearCookie('token')
    return res.json({
        message: 'Signout success'
    })
}

export const requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
});

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWYxOTg0ZjYwYWQ0OGE4ZGU0NDA5MGQiLCJpYXQiOjE2NDMyNzA5MDUsImV4cCI6MTY0MzM1NzMwNX0.LNR54XiBhT8cB8zig6URAmpxO0pazmIf0AvxTlm0WeM
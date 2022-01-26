import { validationResult } from "express-validator";

export default function runValidation(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).json({ error: errors.array()[0].msg });
    }

    next();
}

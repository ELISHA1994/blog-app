import { check } from "express-validator";

export const categoryCreatValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
];

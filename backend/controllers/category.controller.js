import slugify from "slugify";
import {createCategory} from "../services/category.service.js";
import { errorHandler } from "../helper/dbErrorHandler.js";

export const create = async (req, res) => {
    const {name} = req.body;
    const slug = slugify(name).toLowerCase()
    console.log(slug);

    const cateData = {name, slug};
    createCategory(cateData)
        .then(data => {
            return res.json(data);
        })
        .catch(err => {
            return res.status(400).json({
                error: errorHandler(err)
            });
        })
}

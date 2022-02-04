import slugify from "slugify";
import {
    createCategory,
    getCategories,
    getCategory, removeCategory
} from "../services/category.service.js";
import { errorHandler } from "../helper/dbErrorHandler.js";

export const create_category = async (req, res) => {
    try {
        const {name} = req.body;
        const slug = slugify(name).toLowerCase()
        console.log("SLUG",slug);

        const cateData = {name, slug};
        const result = await createCategory(cateData);

        return res.json(result);
    } catch (err) {
        console.error(err);
        return  res.status(400).json({
            error: errorHandler(err)
        })
    }

}

export const get_categories = async (req, res) => {
    try {
        const categories = await getCategories();
        return res.json(categories);
    } catch (err) {
        console.error(err);
        return  res.status(400).json({
            error: errorHandler(err)
        })
    }
}

export const get_category = async (req, res) => {
    try {
        const slug = req.params.slug.toLowerCase();
        const responseFromService = await getCategory(slug);
        return res.json(responseFromService)
    } catch (err) {
        console.error(err);
        return  res.status(400).json({
            error: errorHandler(err)
        })
    }
}

export const delete_category = async (req, res) => {
    try {
        const slug = req.params.slug.toLowerCase();
        await removeCategory(slug);
        return res.json({ message: 'Category deleted successfully' });
    } catch (err) {
        console.error(err);
        return res.status(400).json({
            error: errorHandler(err)
        })
    }
}

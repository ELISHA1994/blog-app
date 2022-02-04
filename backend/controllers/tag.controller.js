import slugify from "slugify";
import {errorHandler} from "../helper/dbErrorHandler.js";
import {
    create_Tag,
    get_Tag,
    get_Tags,
    remove_Tag
} from "../services/tag.service.js";

export const createTag = async (req, res) => {
    try {
        const { name } = req.body;
        let slug = slugify(name).toLowerCase();
        const tagData = { name, slug };
        const responseFromService = await create_Tag(tagData)
        return res.json(responseFromService);
    } catch (err) {
        console.error(err);
        return  res.status(400).json({
            error: errorHandler(err)
        })
    }
}

export const getTags = async (req, res) => {
    try {
        const tags = await get_Tags();
        return res.json(tags)
    } catch (err) {
        console.error(err);
        return res.status(400).json({
            error: errorHandler(err)
        })
    }
}

export const getTag = async (req, res) => {
    try {
        const slug = req.params.slug.toLowerCase();
        const responseFromService = await get_Tag(slug);
        return res.json(responseFromService)
    } catch (err) {
        console.error(err);
        return res.status(400).json({
            error: errorHandler(err)
        })
    }
}

export const removeTag = async (req, res) => {
    try {
        const slug = req.params.slug.toLowerCase();
        await remove_Tag(slug)
        return res.json({ message: 'Tag deleted successfully' });
    } catch (err) {
        console.error(err)
        return res.status(400).json({
            error: errorHandler(err)
        })
    }
}

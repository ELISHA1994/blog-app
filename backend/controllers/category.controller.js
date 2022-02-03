import slugify from "slugify";
import {createCategory} from "../services/category.service.js";

export const create = (req, res) => {
    const { name } = req.body;
    const slug = slugify(name).toLowerCase()
    console.log(slug);

    const cateData = {name, slug};
    const responseFromService = createCategory(cateData);
    if (responseFromService.error) {
        return res.status(400).json({
            error: responseFromService.error
        });
    }

    return res.json(responseFromService);

}

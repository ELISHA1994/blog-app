import Category from "../models/category.model.js";


export const createCategory = async (data) => {
    const {name, slug} = data;

    let newCategory = new Category({name, slug});

    return await newCategory.save();
}

export const getCategories = async () => {
    return Category.find({});
}

export const getCategory = async (data) => {
    return Category.find({ slug: data });
}

export const removeCategory = async (data) => {
    return Category.findOneAndRemove({ slug: data });
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWY5Y2E1ZTQwYjI0MjFiOWJjMGFmNDEiLCJpYXQiOjE2NDM4OTAxMjMsImV4cCI6MTY0Mzk3NjUyM30.R4u1Mhv5a2DpLygXU5XstgniPZgReOPh3LWJnS3sXPo
